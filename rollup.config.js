import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import progress from 'rollup-plugin-progress';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';
import pkg from './package.json';

export default [{
  input: 'src/initialize.js',
  output: [{
    file: 'dist/initialize.js',
    format: 'cjs',
  }],
  plugins: [
    progress(),
    resolve(),
    postcss({
      minimize: true,
      modules: false,
      inject: false,
      extract: pkg.style,
    }),
  ],
}, {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    progress(),
    external(),
    svgr(),
    postcss({
      minimize: false,
      modules: true,
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/plugin-proposal-class-properties'],
    }),
    resolve(),
    commonjs(),
    json({
      include: ['src/**'],
      exclude: ['node_modules/**', 'src/icomoon'],
      compact: true,
      preferConst: true,
    }),
  ],
}];
