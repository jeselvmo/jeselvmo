import expect from 'expect'
import pinyin from '../../src/utils/pinyin'

pinyin.addPhrasesDict({
    "阿家阿翁": [["ā"], ["gū"], ["ā"], ["wēng"]]
});

describe('pinyin', () => {
    describe('single_pinyin', () => {

        it('测试单音字', () => {

            expect(
                pinyin.single_pinyin('杨', {
                    heteronym: true
                })[0]
            ).toBe('yáng')

            expect(
                pinyin.single_pinyin('吸', {
                    heteronym: true
                })[0]
            ).toBe('xī')

        })

        it('测试多音字', () => {

            expect(
                pinyin.single_pinyin('朝', {
                    heteronym: true
                }).join(',')
            ).toBe(['cháo', 'zhāo'].join(','))

            expect(
                pinyin.single_pinyin('汶', {
                    heteronym: true
                }).join(',')
            ).toBe(['mén', 'wèn'].join(','))

            expect(
                pinyin.single_pinyin('风', {
                    heteronym: true
                }).join(',')
            ).toBe(['fēng', 'fèng', 'fěng'].join(','))

        })

        it('测试样式 STYLE_NORMAL', () => {

            expect(
                pinyin.single_pinyin('朝', {
                    style: pinyin.STYLE_NORMAL,
                    heteronym: true
                }).join(',')
            ).toBe(['chao', 'zhao'].join(','))

        })

        it('测试样式 STYLE_FIRST_LETTER', () => {

            expect(
                pinyin.single_pinyin('朝', {
                    style: pinyin.STYLE_FIRST_LETTER,
                    heteronym: true
                }).join(',')
            ).toBe(['c', 'z'].join(','))

        })

        it('测试样式 STYLE_INITIALS', () => {

            expect(
                pinyin.single_pinyin('朝', {
                    style: pinyin.STYLE_INITIALS,
                    heteronym: true
                }).join(',')
            ).toBe(['ch', 'zh'].join(','))

        })

        it('测试样式 STYLE_TO3NE', () => {

            expect(
                pinyin.single_pinyin('朝', {
                    style: pinyin.STYLE_TO3NE,
                    heteronym: true
                }).join(',')
            ).toBe(['cha2o', 'zha1o'].join(','))

        })

        it('测试样式 STYLE_TONE2', () => {

            expect(
                pinyin.single_pinyin('朝', {
                    style: pinyin.STYLE_TONE2,
                    heteronym: true
                }).join(',')
            ).toBe(['chao2', 'zhao1'].join(','))

        })

        it('测试样式 STYLE_TONE', () => {

            expect(
                pinyin.single_pinyin('朝', {
                    style: pinyin.STYLE_TONE,
                    heteronym: true
                }).join(',')
            ).toBe(['cháo', 'zhāo'].join(','))

        })

    })

    describe('convert', () => {

        it('中文转换拼音', () => {

            expect(
                pinyin.convert('朝阳区', {
                    heteronym: true
                }).toString()
            ).toBe('cháo,zhāo,yáng,ōu,qū')

            expect(
                pinyin.convert('朝阳区', {
                    heteronym: false
                }).toString()
            ).toBe('cháo,yáng,ōu')


            expect(
                pinyin.convert('朝阳区', {
                    style: pinyin.STYLE_NORMAL,
                    heteronym: false
                }).toString()
            ).toBe('chao,yang,ou')

        })
    })

    describe('phrases_pinyin', () => {

        it('词组中文转换拼音', () => {

            expect(
                pinyin.phrases_pinyin('朝阳区', {
                    segment: false
                }).toString()
            ).toBe('cháo,yáng,qū')

        })
    })


    describe('segment_pinyin', () => {

        it('分词中文转换拼音', () => {

            expect(
                pinyin.convert('我在北京市朝阳区看汶川大地震上班', {
                    segment: true,
                })[7][0]
            ).toBe('qū')

            expect(
                pinyin.convert('我在北京市朝阳区看汶川大地震上班', {
                    segment: false,
                })[7][0]
            ).toBe('ōu')

        })
    })


    describe('addPhrasesDict', () => {

        it('新增分词中文转换拼音', () => {

            expect(
                pinyin.convert('阿家阿翁', {
                    segment: true,
                })[1][0]
            ).toBe('gū')

            expect(
                pinyin.convert('应応英莺珱偀渶绬婴媖瑛煐朠锳碤嫈嘤缨撄甇緓蝧罂賏樱璎鹦噟霙罃褮鴬韺嬰膺應鹰甖鶑鶧罌譍孆嚶攖蘡孾瀴櫻瓔礯譻鶯鑍鷪蠳纓鷹鸎鸚', {
                    segment: true,
                })[3][0]
            ).toBe('yīng')

        })
    })
});