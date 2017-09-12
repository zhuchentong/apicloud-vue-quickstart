// const {join, resolve} = require('path')
// const webpack = require('webpack')
const glob = require('glob')

// webpack插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const baseWebpackConfig = require('./build/webpack.base.conf')

// 入口文件
let entries = {}
let chunks = []
let config = Object.assign({}, baseWebpackConfig)

// 获取入口文件
getEntriesAndChunks()
// 获取页面文件
generateHtmlEntries()
// 获取启动主文件
generateIndexFile()

// 添加入口文件配置
Object.assign(config, {entry: entries})

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
    chunks: ['common', 'index']
  }))
}

/**
 * 生成入口文件列表
 */
function getEntriesAndChunks () {
  const filePrefix = 'src/entries/'
  const fileSuffix = '.entry.js'

  glob.sync('./src/entries/**/*.js').forEach(function (name) {
    var n = name.slice(name.lastIndexOf(filePrefix) + filePrefix.length, name.length - fileSuffix.length)
    entries[n] = [name]
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

    if (process.env.NODE_ENV === 'production') {
      conf.hash = true
    }
    config.plugins.push(new HtmlWebpackPlugin(conf))
  })
}

// console.log(config)

// const pages = getHtmls();

// pages.forEach(function (pathname) {
//   // filename 用文件夹名字
//   let fileBasename = pathname.substring(6, pathname.length - 4);
//   var conf = {
//     filename: fileBasename + '.html', //生成的html存放路径，相对于path
//     template: 'template.ejs', //html模板路径
//     src: 'src/' + pathname + '.js',
//     body: require(fileBasename + '.html')
//   };
//   var chunk = pathname.substring(6, pathname.length - 4);
//   if (chunks.indexOf(chunk) > -1) {
//     conf.inject = 'body';
//     conf.chunks = ['common', chunk];
//   }
//   if (process.env.NODE_ENV === 'production') {
//     conf.hash = true;
//   }
//   config.plugins.push(new HtmlWebpackPlugin(conf));
// });

// function getCommonChunks(chunks) {
//   let newChunks = [];
//   chunks.forEach(function (item) {
//     if (!item.includes('questions')) {
//       newChunks.push(item);
//     }
//   });
//   // console.log(newChunks);
//   return newChunks;
// }

// function getHtmls() {
//   var htmls = [];
//   glob.sync('./src/entries/**/*.html').forEach(function (name) {
//     var n = name.slice(name.lastIndexOf('src/') + 4, name.length - 5);
//     htmls.push(n);
//   });
//   return htmls;
// }

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map';
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     })
//   ]);
// }
