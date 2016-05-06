var webpack = require('webpack');
var DEBUG = !(process.env.NODE_ENV === 'production');

var config = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  entry: {
    'app':'./src/flux/index.js',
    'vendors': ['react','react-dom']
  },
  output: {
    publicPath:'/dist/',
    path: './dist',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react','es2015']
      }
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
  resolve: {
    modulesDirectories:[
      '',
      'node_modules',
      'src',
      'less'
    ],
    extensions:['','.js']
  },
  devServer: {
    inline: true,
  },
  devtool: DEBUG ? 'source-map': false
}

module.exports = config;