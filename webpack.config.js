const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
      rules: [
        {
          test: /\.txt$/, // маска для имени файла
          use: 'raw-loader' // какой загрузчик использовать
        },
      ],
    },
    plugins:[
        new HtmlWebpackPlugin({template:"./src/index.html",filename:"./index.html"})
    ]
};