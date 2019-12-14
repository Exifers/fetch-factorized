import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import sourceMaps from "rollup-plugin-sourcemaps";

export default [
  {
    input: 'src/main.js',
    output: [
      {
        name: 'fetchFactorized',
        file: pkg.browser,
        format: 'umd',
        exports: 'named'
      },
      {file: pkg.module, format: 'es'},
      {file: pkg.main, format: 'cjs'}
    ],
    plugins: [
      typescript(),
      sourceMaps()
    ]
  }
];
