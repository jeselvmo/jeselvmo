const fs = require('fs-extra');
const path = require('path');

const srcPath = path.resolve(process.cwd(), 'src');

/**
 * 生成index.ts中所有方法
 */
function main() {
  const files = fs.readdirSync(srcPath);

  let str = '{\n';
  str += '  VERSION,\n';
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!(file.startsWith('_') || file === 'index.ts')) {
      let name = file.replace('.ts', '');
      str += '  ' + name + ',\n';
    }
  }
  str += '}';

  const file = path.resolve(srcPath, 'index.ts');
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(/\{\n  VERSION,[\W\w\n]*\}/, str);
  fs.writeFileSync(file, content, 'utf-8');

  console.log('OK');
}

main();
