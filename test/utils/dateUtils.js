import expect from 'expect'
import dateUtils from "../../src/dateUtils";

describe('dateUtils', () => {

    describe('format', () => {

        it('default', () => {

            expect(
                dateUtils.format(new Date())
            ).toBe('2018-05-26')

        })

        it('F_DATE', () => {

            expect(
                dateUtils.format(new Date(), dateUtils.F_DATE)
            ).toBe('2018-05-26')

        })

        it('F_DATE_', () => {

            expect(
                dateUtils.format(new Date(), dateUtils.F_DATE_)
            ).toBe('20180526')

        })
    })

});