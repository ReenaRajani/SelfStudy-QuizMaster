const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',

  entry: path.join(__dirname, 'src/index.js'),

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app_bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

module.exports = config;
