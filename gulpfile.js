const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const through = require('through2');
const rollup = require('rollup');
const rollupResolve = require('@rollup/plugin-node-resolve');
const rollupCommonjs = require('@rollup/plugin-commonjs');
const rollupTypescript = require('@rollup/plugin-typescript');
const rollupJson = require('@rollup/plugin-json');
const rollupTerser = require('@rollup/plugin-terser');
const tsconfig = require('./tsconfig.json');
const packageJson = require('./package.json');

function updateVersion() {
  return gulp
    .src('./src/index.ts')
    .pipe(
      through.obj((file, enc, cb) => {
        let content = file.contents.toString();
        content = content.replace(/VERSION = ('\d+\.\d+\.\d+'|'\d+\.\d+\.\d+-\w+\.\d+')/, `VERSION = '${packageJson.version}'`);
        file.contents = Buffer.from(content);
        cb(null, file);
      })
    )
    .pipe(gulp.dest('./src/'));
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
  });
  return gulp
    .src(['src/**/*.{js,jsx,ts,tsx}'], {
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('dist/es/'));
}

function buildCJS() {
  return gulp
    .src(['dist/es/**/*.js'])
    .pipe(
      babel({
        'presets': [['@babel/env', { 'modules': false }]],
        'plugins': ['@babel/plugin-transform-modules-commonjs', 'add-module-exports'],
      })
    )
    .pipe(gulp.dest('dist/cjs/'));
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
    declaration: true,
    emitDeclarationOnly: true,
  });
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('dist/typings/'));
}

function buildBundle() {
  return rollup
    .rollup({
      input: './src/index.ts',
      plugins: [
        // Allow json resolution
        rollupJson(),
        // Compile TypeScript files
        rollupTypescript({ sourceMap: false }),
        // Allow bundling cjs modules
        rollupCommonjs(),
        // Allow node_modules resolution
        rollupResolve(),
      ],
    })
    .then(bundle => {
      bundle.write({
        file: `./dist/umd/${packageJson.name}.js`,
        name: `${packageJson.name}`,
        format: 'umd',
        sourcemap: false,
      });
    });
}

function buildUMD() {
  return rollup
    .rollup({
      input: './src/index.ts',
      plugins: [
        // Allow json resolution
        rollupJson(),
        // Compile TypeScript files
        rollupTypescript({ sourceMap: false }),
        // Allow bundling cjs modules
        rollupCommonjs(),
        // Allow node_modules resolution
        rollupResolve(),
        // Generate a minified bundle
        rollupTerser(),
      ],
    })
    .then(bundle => {
      bundle.write({
        file: `./dist/umd/${packageJson.name}.min.js`,
        name: `${packageJson.name}`,
        format: 'umd',
        sourcemap: false,
      });
    });
}

function copyMetaFiles() {
  return gulp.src(['./README.md', './LICENSE.txt']).pipe(gulp.dest('./dist/'));
}

function generatePackageJSON() {
  return gulp
    .src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString();
        const parsed = JSON.parse(rawJSON);
        delete parsed.scripts;
        delete parsed.devDependencies;
        delete parsed.publishConfig;
        delete parsed.files;
        delete parsed.resolutions;
        delete parsed.packageManager;
        const stringified = JSON.stringify(parsed, null, 2);
        file.contents = Buffer.from(stringified);
        cb(null, file);
      })
    )
    .pipe(gulp.dest('./dist/'));
}

exports.updateVersion = updateVersion;

exports.default = gulp.series(
  updateVersion, //
  buildES,
  buildCJS,
  buildDeclaration,
  buildBundle,
  buildUMD,
  copyMetaFiles,
  generatePackageJSON
);
