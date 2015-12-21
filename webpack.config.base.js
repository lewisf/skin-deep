'use strict';

module.exports = {
  output: {
    library: 'SkinDeep',
    libraryTarget: 'umd'
  },

  externals: [
    {
      "react": "react",
      "react/addons": "react-with-addons",
      "react-dom/server": "react-dom-server",
      "react-addons-test-utils": "react-addons-test-utils"
    }
  ],

  module: {
    loaders: [
      { test: /\.js%/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
}
