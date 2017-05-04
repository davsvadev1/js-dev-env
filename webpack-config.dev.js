import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  },
  plugins: [
    // Create HTML file that includes reference to bundle JS.
    new HtmlWebpackPlugin( {
      template: 'src/index.html',
      inject: true
    })
  ],
};
