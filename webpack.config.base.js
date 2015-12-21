'use strict';

module.exports = {
  module: {
    loaders: [
      { test: /\.js%/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    library: 'shallowRender',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  }
}
