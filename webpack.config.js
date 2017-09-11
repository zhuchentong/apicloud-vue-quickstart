const {
  join,
  resolve
} = require('path');
const webpack = require('webpack');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

// 入口文件
let entries = {};
let chunks = [];
var baseWebpackConfig = require('./build/webpack.base.conf')


getEntriesAndChunks();

var config = Object.assign({}, baseWebpackConfig, {
  entry: entries
})

generateHtmlEntries();

generateIndexFile()
console.log(entries)

function generateIndexFile() {
  entries['index'] = ['./index.js'];
  chunks.push('index');

  config.plugins.push(new HtmlWebpackPlugin({
    filename: 'index.html', //生成的html存放路径，相对于path
    template: 'index.html', //html模板路径
    chunks: ['common', 'index']
  }));
}
/**
 * 生成入口文件列表
 */
function getEntriesAndChunks() {
  const file_prefix = 'src/entries/'
  const file_suffix = '.entry.js'

  glob.sync('./src/entries/**/*.js').forEach(function (name) {
    var n = name.slice(name.lastIndexOf(file_prefix) + file_prefix.length, name.length - file_suffix.length);
    entries[n] = [name];
    chunks.push(n);
  });

  // entries['vendor'] = ['vue'];
}

/**
 * 生成html文件列表
 */
function generateHtmlEntries() {
  chunks.forEach(function (name) {
    var conf = {
      filename: name + '.html', //生成的html存放路径，相对于path
      template: 'template.ejs' //html模板路径
    };
    conf.inject = 'body';
    conf.chunks = ['common', name];

    if (process.env.NODE_ENV === 'production') {
      conf.hash = true;
    }
    config.plugins.push(new HtmlWebpackPlugin(conf));
  });
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

module.exports = config;


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