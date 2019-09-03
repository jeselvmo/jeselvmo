// rollup.config.js
import fs from 'fs';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
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
    nodeResolve(),
    commonjs({
      include: /node_modules/
    }),
    babel({
      babelrc: false,
      presets: [['@babel/env', { modules: false }]]
    })
  ]
};
