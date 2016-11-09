var webpack = require("webpack");
var path = require("path");
module.exports = {
  entry: "./js/index.jsx",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
        components: path.join(__dirname, "js/components"),
        actions: path.join(__dirname, "js/redux/actions"),
        reducers: path.join(__dirname, "js/redux/reducers"),
        store: path.join(__dirname, "js/redux/store"),
        utils: path.join(__dirname, "js/utils")
    }
  },
  devtool: "source-map",
  module: {
    loaders: [
        {
            test: /\.jsx?$/, 
            exclude: /(node_modules|bower_components)/, 
            loader: "babel-loader"
        }
    ]
  }
}