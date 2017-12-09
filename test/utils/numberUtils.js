import expect from 'expect'
import numberUtils from '../../src/utils/numberUtils'

describe('numberUtils', () => {
    describe('format', () => {

        it('format(#,##0.##)', () => {
            expect(
                numberUtils.format(28719.345928, '#,##0.##')
            ).toBe('28,719.35')
        })

    })

})