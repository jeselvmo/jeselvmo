import regexp from '../utils/regexp';
import pinyinDict from '../data/pinyin-dict';
import phrasesDict from '../data/phrases-dict';


// XXX: Symbol when web support.
const PINYIN_STYLE = {
    NORMAL: 0,       // 普通风格，不带音标。
    TONE: 1,         // 标准风格，音标在韵母的第一个字母上。
    TONE2: 2,        // 声调以数字形式在拼音之后，使用数字 0~4 标识。
    TO3NE: 5,        // 声调以数字形式在声母之后，使用数字 0~4 标识。
    INITIALS: 3,     // 仅需要声母部分。
    FIRST_LETTER: 4, // 仅保留首字母。
};
const DEFAULT_OPTIONS = {
    style: PINYIN_STYLE.TONE, // 风格
    segment: false,           // 分词。
    heteronym: false,         // 多音字
};

// 声母表。
const INITIALS = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,r,zh,ch,sh,z,c,s".split(",");
// 韵母表。
const FINALS = "ang,eng,ing,ong,an,en,in,un,er,ai,ei,ui,ao,ou,iu,ie,ve,a,o,e,i,u,v".split(",");
// 带音标字符。
const PHONETIC_SYMBOL = {
    "ā": "a1",
    "á": "a2",
    "ǎ": "a3",
    "à": "a4",
    "ē": "e1",
    "é": "e2",
    "ě": "e3",
    "è": "e4",
    "ō": "o1",
    "ó": "o2",
    "ǒ": "o3",
    "ò": "o4",
    "ī": "i1",
    "í": "i2",
    "ǐ": "i3",
    "ì": "i4",
    "ū": "u1",
    "ú": "u2",
    "ǔ": "u3",
    "ù": "u4",
    "ü": "v0",
    "ǘ": "v2",
    "ǚ": "v3",
    "ǜ": "v4",
    "ń": "n2",
    "ň": "n3",
    "": "m2",
};
const RE_PHONETIC_SYMBOL = new RegExp("([" + Object.keys(PHONETIC_SYMBOL).join("") + "])", "g");
const RE_TONE2 = /([aeoiuvnm])([0-4])$/;

/*
 * 格式化拼音为声母（Initials）形式。
 * @param {String}
 * @return {String}
 */
function initials(pinyin) {
    for (let i = 0, l = INITIALS.length; i < l; i++) {
        if (pinyin.indexOf(INITIALS[i]) === 0) {
            return INITIALS[i];
        }
    }
    return "";
}

/**
 * 分词正则
 */
const segmentRegexp = (() => {
    let strs = [];
    for (let key in phrasesDict) {
        strs.push(key);
    }
    return new RegExp('(' + strs.join('|') + ')', 'g')
})();


const pinyin = {

    // 新增短语词典
    addPhrasesDict(dict) {
        Object.assign(phrasesDict, dict);
    },


    // @param {String} hans 要转为拼音的目标字符串（汉字）。
    // @param {Object} options, 可选，用于指定拼音风格，是否启用多音字。
    // @return {Array} 返回的拼音列表。
    convert(hans, options) {

        if (typeof hans !== "string") {
            return [];
        }

        options = Object.assign({}, DEFAULT_OPTIONS, options);

        // 走分词拼音
        if (options.segment) {
            return pinyin.segment_pinyin(hans, options);
        }

        let pys = [];
        let nohans = "";

        for (let i = 0, words, l = hans.length; i < l; i++) {

            words = hans[i];

            let result = pinyin.single_pinyin(words, options);
            if (result[0] !== words) {

                // ends of non-chinese words.
                if (nohans.length > 0) {
                    pys.push([nohans]);
                    nohans = ""; // reset non-chinese words.
                }

                pys.push(result);

            } else {
                nohans += words;
            }
        }

        // 清理最后的非中文字符串。
        if (nohans.length > 0) {
            pys.push([nohans]);
            nohans = ""; // reset non-chinese words.
        }


        return pys;
    },

    segment_pinyin(hans, options) {
        if (typeof hans !== "string") {
            return [];
        }

        options = Object.assign({}, DEFAULT_OPTIONS, options);

        //分词
        hans = regexp.replace(hans, segmentRegexp, '{$1}');

        let pys = [];
        let phrases = "";

        for (let i = 0, words, l = hans.length; i < l; i++) {

            words = hans[i];

            if (words === '{' || words === '}' || phrases.length > 0) {
                phrases += words;

                if (words === '}') {
                    phrases = phrases.substring(1, phrases.length - 1);
                    pys = pys.concat(pinyin.phrases_pinyin(phrases, options));
                    phrases = "";
                }
            } else {
                pys.push(pinyin.single_pinyin(words, options))
            }
        }

        // 清理最后的非中文字符串。
        if (phrases.length > 0) {
            pys.push([phrases]);
            phrases = ""; // reset non-chinese words.
        }


        return pys

    },


    // 单字拼音转换。
    // @param {String} han, 单个汉字
    // @return {Array} 返回拼音列表，多音字会有多个拼音项。
    single_pinyin(han, options) {

        if (typeof han !== "string") {
            return [];
        }
        if (han.length !== 1) {
            return pinyin.single_pinyin(han.charAt(0), options);
        }

        let reg = new RegExp(`([^:;]*):[^:;]*${han}[^:;]*;`, 'g')
        let results = regexp.exec(pinyinDict, reg);

        if (results.length === 0) {
            return [han];
        }

        if (!options.heteronym) {
            return [pinyin.toFixed(results[0][1], options.style)]
        }

        return results.map((result) => pinyin.toFixed(result[1], options.style));
    },

    // 词语注音
    // @param {String} phrases, 指定的词组。
    // @param {Object} options, 选项。
    // @return {Array}
    phrases_pinyin(phrases, options) {
        if (typeof phrases !== "string") {
            return [];
        }

        options = Object.assign({}, DEFAULT_OPTIONS, options);

        let py = [];
        //! copy pinyin result.
        phrasesDict[phrases].forEach(function (item, idx) {
            py[idx] = [];
            if (options.heteronym) {
                item.forEach(function (py_item, py_index) {
                    py[idx][py_index] = pinyin.toFixed(py_item, options.style);
                });
            } else {
                py[idx][0] = pinyin.toFixed(item[0], options.style);
            }
        });
        return py;
    },


    /**
     * 格式化拼音风格。
     *
     * @param {String} pinyin TONE 风格的拼音。
     * @param {ENUM} style 目标转换的拼音风格。
     * @return {String} 转换后的拼音。
     */
    toFixed(pinyin, style) {
        let tone = ""; // 声调。
        let first_letter;
        let py;
        switch (style) {
            case PINYIN_STYLE.INITIALS:
                return initials(pinyin);

            case PINYIN_STYLE.FIRST_LETTER:
                first_letter = pinyin.charAt(0);
                if (PHONETIC_SYMBOL.hasOwnProperty(first_letter)) {
                    first_letter = PHONETIC_SYMBOL[first_letter].charAt(0);
                }
                return first_letter;

            case PINYIN_STYLE.NORMAL:
                return pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1_phonetic) {
                    return PHONETIC_SYMBOL[$1_phonetic].replace(RE_TONE2, "$1");
                });

            case PINYIN_STYLE.TO3NE:
                return pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1_phonetic) {
                    return PHONETIC_SYMBOL[$1_phonetic];
                });

            case PINYIN_STYLE.TONE2:
                py = pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1) {
                    // 声调数值。
                    tone = PHONETIC_SYMBOL[$1].replace(RE_TONE2, "$2");

                    return PHONETIC_SYMBOL[$1].replace(RE_TONE2, "$1");
                });
                return py + tone;

            case PINYIN_STYLE.TONE:
            default:
                return pinyin;
        }
    },


    get STYLE_NORMAL() {
        return PINYIN_STYLE.NORMAL;
    },

    get STYLE_TONE() {
        return PINYIN_STYLE.TONE;
    },

    get STYLE_TONE2() {
        return PINYIN_STYLE.TONE2;
    },

    get STYLE_TO3NE() {
        return PINYIN_STYLE.TO3NE;
    },

    get STYLE_INITIALS() {
        return PINYIN_STYLE.INITIALS;
    },

    get STYLE_FIRST_LETTER() {
        return PINYIN_STYLE.FIRST_LETTER;
    },

    get DEFAULT_OPTIONS() {
        return DEFAULT_OPTIONS;
    },
};

export default pinyin;
