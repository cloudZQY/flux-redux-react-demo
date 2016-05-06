var path = require('path');
var webpack = require('webpack');
var DEBUG = !(process.env.NODE_ENV === 'production');

var config = {
  devtool: 'eval',
  entry: {
    flux: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/flux-demo/index.js'
    ],
    redux: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/redux-demo/index.js'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  resolve: {
    modulesDirectories:[
      '',
      'node_modules',
      'src',
      'less'
    ],
    extensions:['','.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot','babel']
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.less$/,
      loader: 'style!css!less'
    },
    {
      test: /\.png$/,
      loader: 'url?limit=10000'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
}

module.exports = config;