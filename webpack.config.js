const webpack = require('webpack');
const path = require('path');

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src') + "/index.js",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
              mimetype: 'image/png'
              },
            },
          ]
        }
      ]
   }
};

module.exports = config;
