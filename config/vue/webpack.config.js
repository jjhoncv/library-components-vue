const glob = require('glob');
const utils = require('./utils');

const path = require('path');
const pathComponents = __dirname + './../../src/**/*.js';
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + './../../src/components/index.js',
  output: {
    path: path.resolve(__dirname, './../../dist'),
    filename: 'library-ui.common.js',
    libraryTarget: 'umd',
    library: 'library-components-vue'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      //   {
      //     test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
      //     use: {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 100000
      //       }
      //     }
      //   },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
      //   {
      //     test: /\.css$/,
      //     use: ExtractTextPlugin.extract({
      //       use: 'css-loader'
      //     })
      //   }
    ]
  }
  //   plugins: [new ExtractTextPlugin('css/[name].css')]
};
