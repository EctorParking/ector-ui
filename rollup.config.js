import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import progress from 'rollup-plugin-progress';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';
import os from 'os';
import path from 'path';
import pkg from './package.json';

const config = [
  {
    input: 'src/initialize.js',
    output: [
      {
        file: 'dist/initialize.css',
        format: 'es',
      },
    ],
    plugins: [
      progress(),
      external(),
      svgr(),
      postcss({
        minimize: false,
        modules: true,
        extract: true,
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
    watch: {
      exclude: '*',
    },
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.style,
        format: 'es',
      },
    ],
    plugins: [
      progress(),
      external(),
      svgr(),
      postcss({
        minimize: false,
        modules: true,
        extract: true,
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
    watch: {
      exclude: '*',
    },
  },
  {
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
  },
];

// if (process.env.BUILD === 'production') {
//   config.unshift({
//     input: path.resolve('src/index.js'),
//     output: {
//       file: '/tmp/bulk.js',
//       format: 'system',
//     },
//     plugins: [
//       progress(),
//       external(),
//       svgr(),
//       postcss({
//         minimize: false,
//         extract: 'dist/library.css',
//       }),
//       url(),
//       babel({
//         exclude: 'node_modules/**',
//         plugins: ['@babel/plugin-proposal-class-properties'],
//       }),
//       resolve(),
//       commonjs(),
//       json({
//         include: ['src/**'],
//         exclude: ['node_modules/**', 'src/icomoon'],
//         compact: true,
//         preferConst: true,
//       }),
//     ],
//   });
// }

export default config;
