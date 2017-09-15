// const {join, resolve} = require('path')
// const webpack = require('webpack')
const glob = require('glob')

// webpack插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./build/webpack.base.conf')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

// 入口文件
let entries = {}
let chunks = []
let config = baseWebpackConfig

// 获取入口文件
getEntriesAndChunks()
// 获取页面文件
generateHtmlEntries()
// 获取启动主文件
generateIndexFile()

// 添加入口文件配置
Object.assign(config, {
  entry: entries
})

// 导出配置文件
module.exports = config

/**
 * 加载主页面文件
 */
function generateIndexFile () {
  entries['index'] = ['./index.js']
  chunks.push('index')

  config.plugins.push(new HtmlWebpackPlugin({
    filename: 'index.html', // 生成的html存放路径，相对于path
    template: 'index.html', // html模板路径
    chunks: []
  }))
}

/**
 * 生成入口文件列表
 */
function getEntriesAndChunks () {
  const filePrefix = 'src/controllers/pages/'
  const fileSuffix = '.controller.js'

  glob.sync('./src/controllers/pages/**/*.js').forEach(function (name) {
    var n = name.slice(name.lastIndexOf(filePrefix) + filePrefix.length, name.length - fileSuffix.length)
    entries[n] = ['babel-polyfill', name]
    chunks.push(n)
  })
  // entries['vendor'] = ['vue'];
}

/**
 * 生成html文件列表
 */
function generateHtmlEntries () {
  chunks.forEach(function (name) {
    let filename = name.split('/')[name.split('/').length - 1]
    var conf = {
      filename: `${name}.html`, // 生成的html存放路径，相对于path
      template: 'template.ejs', // html模板路径
      src: `./${filename}.js`
    }
    conf.inject = 'body'
    conf.chunks = ['common']

    // 如果生产环境则对文件进行hash
    if (process.env.NODE_ENV === 'production') {
      conf.hash = true
    }

    config.plugins.push(new HtmlWebpackPlugin(conf))
  })
}
