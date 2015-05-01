module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'react-fontwesome.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }
};
