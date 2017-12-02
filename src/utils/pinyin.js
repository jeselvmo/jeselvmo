import pinyinDict from '../data/pinyinDict';
import phrasesDict from '../data/phrasesDict';
import assign from '../base/object-assign';

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
//const FINALS = "ang,eng,ing,ong,an,en,in,un,er,ai,ei,ui,ao,ou,iu,ie,ve,a,o,e,i,u,v".split(",");
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


// 解压拼音库。
// @param {Object} dict_combo, 压缩的拼音库。
// @param {Object} 解压的拼音库。
function buildPinyinCache(dict_combo) {
	let hans = '';
	let uncomboed = {};

	for (let py in dict_combo) {
		hans = dict_combo[py];
		for (let i = 0, han, l = hans.length; i < l; i++) {
			han = hans.charCodeAt(i);
			if (!uncomboed.hasOwnProperty(han)) {
				uncomboed[han] = py;
			} else {
				uncomboed[han] += "," + py;
			}
		}
	}

	return uncomboed;
}


const pinyin = {

	_dict: buildPinyinCache(pinyinDict),

	// @param {String} hans 要转为拼音的目标字符串（汉字）。
	// @param {Object} options, 可选，用于指定拼音风格，是否启用多音字。
	// @return {Array} 返回的拼音列表。
	convert(hans, options) {

		if (typeof hans !== "string") {
			return [];
		}

		options = assign({}, DEFAULT_OPTIONS, options);

		let pys = [];
		let nohans = "";

		for (let i = 0, firstCharCode, words, l = hans.length; i < l; i++) {

			words = hans[i];
			firstCharCode = words.charCodeAt(0);

			if (pinyin._dict[firstCharCode]) {

				// ends of non-chinese words.
				if (nohans.length > 0) {
					pys.push([nohans]);
					nohans = ""; // reset non-chinese words.
				}

				pys.push(pinyin.single_pinyin(words, options));

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

	// 词语注音
	// @param {String} phrases, 指定的词组。
	// @param {Object} options, 选项。
	// @return {Array}
	phrases_pinyin(phrases, options) {
		if (typeof phrases !== "string") {
			return [];
		}

		options = assign({}, DEFAULT_OPTIONS, options);

		let py = [];
		if (phrasesDict.hasOwnProperty(phrases)) {
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
		} else {
			for (let i = 0, l = phrases.length; i < l; i++) {
				py = py.concat(pinyin.convert(phrases[i], options));
			}
		}
		return py;
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

		let hanCode = han.charCodeAt(0);

		if (!pinyin._dict[hanCode]) {
			return [han];
		}

		let pys = pinyin._dict[hanCode].split(",");
		if (!options.heteronym) {
			return [pinyin.toFixed(pys[0], options.style)];
		}

		// 临时存储已存在的拼音，避免多音字拼音转换为非注音风格出现重复。
		let py_cached = {};
		let pinyins = [];
		for (let i = 0, py, l = pys.length; i < l; i++) {
			py = pinyin.toFixed(pys[i], options.style);
			if (py_cached.hasOwnProperty(py)) {
				continue;
			}
			py_cached[py] = py;

			pinyins.push(py);
		}
		return pinyins;
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

	/**
	 * 比较两个汉字转成拼音后的排序顺序，可以用作默认的拼音排序算法。
	 *
	 * @param {String} hanA 汉字字符串 A。
	 * @return {String} hanB 汉字字符串 B。
	 * @return {Number} 返回 -1，0，或 1。
	 */
	compare(hanA, hanB) {
		const pinyinA = pinyin.convert(hanA, DEFAULT_OPTIONS);
		const pinyinB = pinyin.convert(hanB, DEFAULT_OPTIONS);
		return String(pinyinA).localeCompare(pinyinB);
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
