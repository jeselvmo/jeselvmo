import expect from 'expect'
import validator from '../../src/utils/validator'

describe('validator', () => {

    describe('isEmpty', () => {

        it('(undefined) = true', () => {
            expect(
                validator.isEmpty(undefined)
            ).toBe(true)
        });

        it('(null) = true', () => {
            expect(
                validator.isEmpty(null)
            ).toBe(true)
        });

        it('(\'\') = true', () => {
            expect(
                validator.isEmpty('')
            ).toBe(true)
        });

        it('(\'    \') = false', () => {
            expect(
                validator.isEmpty('    ')
            ).toBe(false)
        });

        it('(\'ddd\') = false', () => {
            expect(
                validator.isEmpty('ddd')
            ).toBe(false)
        });

    });

    describe('isBlank', () => {

        it('(undefined) = true', () => {
            expect(
                validator.isBlank(undefined)
            ).toBe(true)
        });

        it('(null) = true', () => {
            expect(
                validator.isBlank(null)
            ).toBe(true)
        });

        it('(\'\') = true', () => {
            expect(
                validator.isBlank('')
            ).toBe(true)
        });

        it('(\'    \') = true', () => {
            expect(
                validator.isBlank('    ')
            ).toBe(true)
        });

        it('(\'ddd\') = false', () => {
            expect(
                validator.isBlank('ddd')
            ).toBe(false)
        });

    })

});