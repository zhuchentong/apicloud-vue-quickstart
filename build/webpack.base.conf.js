const {join,resolve} = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');


module.exports = {
  // devtool: 'cheap-module-source-map',
  output: {
    path: resolve(__dirname, '../dist/'),
    filename: '[name].js',
    // filename: 'script/[id].js',
    publicPath: process.env.NODE_ENV === 'production' ? '../' : ''
  },
  resolve: {
    //配置别名，在项目中可缩减引用路径
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve('src')
    }
  },
  externals: [
    {
      'api': "window.api"
    }
  ],
  module: {
    rules: [{
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [resolve('src')]
        // exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            root: resolve(__dirname, 'src'),
            attrs: ['img:src', 'link:href']
          }
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg|svgz)(\?.+)?$/,
        exclude: /iconfont\.svg/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/img/[name].[hash:7].[ext]'
          }
        }]
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        include: /fonts/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/fonts/[name].[hash:7].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    // new CommonsChunkPlugin({
    //     name: 'common',
    //     filename: 'assets/js/common.js',
    //     chunks: getCommonChunks(chunks),
    //     minChunks: 5
    // }),
    // new CommonsChunkPlugin({
    //     name: 'vendor',
    //     chunks: ['common'],
    //     filename: 'assets/js/vendor.bundle.js',
    //     minChunks: Infinity,
    // }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.DefinePlugin(
      // 引入对应的环境变量
      require(`../env/${process.env.ENV || 'dev'}.env`),
    )
  ],
  watch: true,
  devServer: {
    host: '0.0.0.0',
    port: 8010,
    historyApiFallback: false,
    noInfo: true,
    contentBase: resolve(__dirname, '../dist/'),
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8010',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
  devtool: '#eval-source-map'
}