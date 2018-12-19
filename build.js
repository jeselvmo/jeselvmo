var fs = require('fs');

var dirs = fs.readdirSync('./src');

var lines = [];
var exports = [];

for (var dir of dirs) {
  if (dir != 'index.js' && dir.indexOf('.js') > -1) {
    var fileName = dir.replace('.js', '');
    lines.push(`import ${fileName} from "./${fileName}";`);
    exports.push(`${fileName}`);
  }
}

lines.push('');
lines.push('export default {');
lines.push('  ' + exports.join(',\n  '));
lines.push('};');

fs.writeFileSync('./src/index.js', lines.join('\n'));
