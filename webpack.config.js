const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var output_watch_path = '../public_html/wp-content/themes/cwc';
var output_css_filename = 'twstyle.css'

if (process.env.NODE_ENV == 'watch') {
  process.env.NODE_ENV = 'development';
  module.exports = {
    entry: './src/styles.css',
    mode: process.env.NODE_ENV,
    output: { path: path.resolve(__dirname, output_watch_path), filename: output_css_filename },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader',
            ],
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin(output_css_filename, {
        disable: process.env.NODE_ENV === 'development',
      }),
      // new HtmlWebpackPlugin({
      //   filename: 'index.html',
      //   template: 'src/index.html',
      // }),
    ],
  }
} else {
  module.exports = {
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true
    },
    entry: './src/styles.css',
    mode: process.env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader',
            ],
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('styles.css', {
        disable: process.env.NODE_ENV === 'development',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
      }),
    ],
  }
}

