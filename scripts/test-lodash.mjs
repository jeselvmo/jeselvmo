import lodash from 'lodash';

var _ = lodash;
var script;
var sep = '//';

script = `_.capitalize('--foo-bar--');`;
console.log(script, sep, eval(script));
script = `_.capitalize('foo-bar');`;
console.log(script, sep, eval(script));
script = `_.capitalize('FOO_BAR');`;
console.log(script, sep, eval(script));
script = `_.capitalize('fooBar');`;
console.log(script, sep, eval(script));
script = `_.capitalize('foo Bar');`;
console.log(script, sep, eval(script));

console.log('');

script = `_.upperFirst('--foo-bar--');`;
console.log(script, sep, eval(script));
script = `_.upperFirst('foo-bar');`;
console.log(script, sep, eval(script));
script = `_.upperFirst('FOO_BAR');`;
console.log(script, sep, eval(script));
script = `_.upperFirst('fooBar');`;
console.log(script, sep, eval(script));
script = `_.upperFirst('foo Bar');`;
console.log(script, sep, eval(script));

console.log('');

const { round } = lodash;
script = `round(15.555, 2);`;
console.log(script, sep, eval(script));
