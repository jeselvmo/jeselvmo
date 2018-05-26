import expect from 'expect'
import regexp from '../../src/regexp'

describe('regexp', () => {
    describe('test', () => {

        it('test', () => {
            expect(
                regexp.test('蒙ICP备06004630号', /ICP/)
            ).toBe(true)
        })

        it('replace', () => {
            expect(
                regexp.replace('蒙ICP备06004630号', /([A-Z]+)/g, '($1)')
            ).toBe('蒙(ICP)备06004630号')
        })

        it('split', () => {
            expect(
                regexp.split('蒙ICP备06004630号', /([A-Z]+)/g).join(',')
            ).toBe(['蒙', 'ICP', '备06004630号'].join(','))

        });

        it('search', () => {
            expect(
                regexp.search('蒙ICP备06004630号', /A/)
            ).toBe(-1);

            expect(
                regexp.search('蒙ICP备06004630号', /I/)
            ).toBe(1);

            expect(
                regexp.search('蒙ICP备06004630号', /0/)
            ).toBe(5);
        });


        it('match', () => {
            expect(
                regexp.match('蒙ICP备06004630号', /([A-Z])/).index
            ).toBe(1);

            expect(
                regexp.match('蒙ICP备06004630号', /([A-Z])/g).join('')
            ).toBe(['I', 'C', 'P'].join(''))
        })

        it('exec', () => {
            expect(
                regexp.exec('fēng:丰风沣枫疯砜封峰烽葑锋蜂酆;fèng:风凤奉俸葑缝;fěng:风讽唪;féng:冯逢缝;', /([^:;]*):[^:;]*鷉[^:;]*;/g).length
            ).toBe(0);

            expect(
                regexp.exec('fēng:丰风沣枫疯砜封峰烽葑锋蜂酆;fèng:风凤奉俸葑缝;fěng:风讽唪;féng:冯逢缝;', /([^:;]*):[^:;]*蜂[^:;]*;/g)[0][1]
            ).toBe('fēng');

            expect(
                regexp.exec('fēng:丰风沣枫疯砜封峰烽葑锋蜂酆;fèng:风凤奉俸葑缝;fěng:风讽唪;féng:冯逢缝;', /([^:;]*):[^:;]*风[^:;]*;/g).length
            ).toBe(3)
        })

    })

})