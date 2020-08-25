import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import JsonPlugin from 'rollup-plugin-json'
// import { uglify } from 'rollup-plugin-uglify'
// import { minify } from 'uglify-es'
// import { terser } from 'rollup-plugin-terser'
const json = require('./package.json')
import commonjs from 'rollup-plugin-commonjs'
import visualizer from 'rollup-plugin-visualizer'

export default {
  input: './src/main.ts',
  output: [
    {
      file: json.main,
      format: 'umd',
      name: 'sdk',
      sourcemap: true,
      minify: true,
    },
    {
      file: json.module,
      format: 'es',
      sourcemap: true,
      minify: true,
    },
  ],
  plugins: [
    visualizer(),
    commonjs(),
    JsonPlugin(),
    typescript({
      useTsconfigDeclarationDir: true,
      clean: true,
      abortOnError: true,
    }),
    sourceMaps(),
    // terser({
    //   output: {
    //     comments: false,
    //     ascii_only: true // 仅输出ascii字符
    //   },
    //   compress: {
    //     pure_funcs: ['console.log'] // 去掉console.log函数
    //   }
    // })
  ],
}
