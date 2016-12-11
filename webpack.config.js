var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins:  debug ?  [
      new ExtractTextPlugin("styles.css"),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
          '$': "jquery",
          'jQuery': "jquery",
          'window.jQuery': "jquery",
          'window.$': 'jquery'
      })
  ] : [
      new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        },
        "require.specified": "require.resolve"
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        mangle: false, 
        sourcemap: false,
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin("styles.css"),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
          '$': "jquery",
          'jQuery': "jquery",
          'window.jQuery': "jquery",
          'window.$': 'jquery'
      })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(eot|com|json|ttf|woff|woff2|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};
