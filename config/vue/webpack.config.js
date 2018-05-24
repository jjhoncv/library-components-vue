const path = require('path');
const glob = require('glob');
const utils = require('./utils');

const entry = utils(glob.sync(__dirname + './../../src/components/**/*.js'));

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, './../../dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
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
