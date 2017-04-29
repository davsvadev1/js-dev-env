const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  },
  plugins: [],
};
