import expect from 'expect'
import pinyin from '../../src/utils/pinyin'

describe('pinyin', () => {
    describe('convert', () => {

        it('中文转换拼音1', () => {
            expect(
                pinyin.convert('杨可可')[0][0]
            ).toBe('yáng')
        })

        it('中文转换拼音2', () => {
            let citys = [
                {
                    "cityId": 0, "cityName": "全国", "cityCode": ""
                }, {
                    "cityId": 1, "cityName": "北京市", "cityCode": 110100
                }, {
                    "cityId": 11, "cityName": "北辰区", "cityCode": 120113
                }, {
                    "cityId": 13, "cityName": "禹州市", "cityCode": 411081
                }, {
                    "cityId": 14, "cityName": "蒙城县", "cityCode": 341622
                }, {
                    "cityId": 18, "cityName": "高邮市", "cityCode": 321084
                }, {
                    "cityId": 24, "cityName": "滕州市", "cityCode": 370481
                }, {
                    "cityId": 27, "cityName": "响水县", "cityCode": 320921
                }, {
                    "cityId": 29, "cityName": "寿县", "cityCode": 340422
                }, {
                    "cityId": 30, "cityName": "新野县", "cityCode": 411329
                }, {
                    "cityId": 31, "cityName": "嘉祥县", "cityCode": 370829
                }, {
                    "cityId": 35, "cityName": "武功县", "cityCode": 610431
                }, {
                    "cityId": 36, "cityName": "扶风县", "cityCode": 610324
                }, {
                    "cityId": 37, "cityName": "镇平县", "cityCode": 411324
                }, {
                    "cityId": 39, "cityName": "新北区", "cityCode": 320411
                }, {
                    "cityId": 42, "cityName": "蜀山区", "cityCode": 340104
                }, {
                    "cityId": 47, "cityName": "西平县", "cityCode": 411721
                }, {
                    "cityId": 48, "cityName": "汶上县", "cityCode": 370830
                }, {
                    "cityId": 49, "cityName": "明光市", "cityCode": 341182
                }, {
                    "cityId": 50, "cityName": "丹阳市", "cityCode": 321181
                }, {
                    "cityId": 51, "cityName": "马鞍山市", "cityCode": 340500
                }, {
                    "cityId": 52, "cityName": "攸县", "cityCode": 430223
                }, {
                    "cityId": 57, "cityName": "黄浦区", "cityCode": 310101
                }, {
                    "cityId": 61, "cityName": "冷水滩区", "cityCode": 431103
                }
            ];
            citys.forEach((c) => {
                // console.log(pinyin.convert(c.cityName))
            });

            expect(
                pinyin.convert('禹')[0][0]
            ).toBe('yǔ')

            expect(
                pinyin.convert('滕')[0][0]
            ).toBe('téng')

            expect(
                pinyin.convert('汶')[0][0]
            ).toBe('wèn')

            expect(
                pinyin.convert('攸')[0][0]
            ).toBe('yōu')

        })

        it('中文转换拼音3', () => {
            let result = pinyin.convert('2018年1月30日(周二)晚上7点半! 由加拿大三次方传媒(CUBE MEDIA INC.)主办的范玮琪北美巡回演唱会 《在幸福的路上》多伦多站MASSEY HALL 梅西剧院开唱啦! 阔别四年，华语乐坛天后范玮琪重回乐坛，展开《在幸福的路上》全新世界巡回演唱会。本次世界巡演本应在2014年起跑， 范范因当时发现自己怀孕而将巡演延宕至今。 或许这一切都是生命最好的安排， 人生角色转换后的范范， 以全新姿态与久违的歌迷们重逢， 温暖尚在，更多了一丝温柔与淡定。',{
                style: 0,
                heteronym: true
            })
            // console.log(result)
            expect(
                result[0][0]
            ).toBe('2018')
        })
    })
})