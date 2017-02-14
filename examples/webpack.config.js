const webpack = require('webpack')

const config = {
  devtool: 'eval',
  entry:  [
    'babel-polyfill',
    './index.js',
  ],
  output: {
    path: __dirname,
    filename: 'build.js',
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: [ 'react'/*, 'es2015', 'stage-1'*/ ],
        },
      },
    ],
  },
}

module.exports = config
