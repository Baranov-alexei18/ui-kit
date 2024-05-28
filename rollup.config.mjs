import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace'; // Добавленный плагин
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import path from 'path';
import babel from 'rollup-plugin-babel'; // Добавленный плагин
import del from 'rollup-plugin-delete';
import dotenv from 'rollup-plugin-dotenv';
import postcss from 'rollup-plugin-postcss';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  external: ['react'],
  plugins: [
    postcss({
      alias: { find: '@', replacement: path.resolve(__dirname, 'src') },
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    styles({
      mode: ['inject', {
        modules: true,
        exportGlobals: true,
        defaultExport: true,
      }],
    }),
    resolve(),
    svgr(),
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: '#', replacement: path.resolve(__dirname, '/') },
      ],
    }),
    del({ targets: 'dist/*' }),
    terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**',
    }),
    typescript(),
    commonjs(),
    dotenv,
    url({ include: ['**/*.svg'], limit: Infinity }),
  ],
};
