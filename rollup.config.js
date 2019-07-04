// rollup.config.js
import fs from 'fs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: `${pkg.name}.js`,
    format: 'umd',
    name: pkg.name,
    banner: `/*!\n${String(fs.readFileSync('./LICENSE'))
      .trim()
      .split('\n')
      .map(l => ` * ${l}`)
      .join('\n')}\n */`
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ]
};
