const path = require('path')
// 依据commonJs规范 找到依赖第三方的模块
const { nodeResolve } = require('@rollup/plugin-node-resolve')
// 依赖解析 commonJs
const commonjs = require('@rollup/plugin-commonjs')
// 进行babel代码转换 向下兼容
const { babel } = require('@rollup/plugin-babel')
// 进行代码压缩
const { terser } = require('rollup-plugin-terser')

const resolvePath = (url) => path.resolve(__dirname, url)

module.exports = {
  input: resolvePath('../src/index.js'),
  output: [
    {
      // 如果是umd/iife的格式下 必须提供
      name: 'deepcopy',
      file: resolvePath('../dist/index.js'),
      // 配置umd格式
      format: 'umd'
    },
    {
      file: resolvePath('../dist/index.esm.js'),
      // 配置esm格式
      format: 'esm'
    }
  ],
  plugins: [
    terser(),
    commonjs(),
    nodeResolve(),
    babel({ babelHelpers: 'bundled' })
  ]
}
