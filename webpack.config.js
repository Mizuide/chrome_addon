var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./rewrite.js",
  module: {
    rules: [{
      test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }]
      }]
    },
    output: {
      path: __dirname + "/src/",
      filename: "client.min.js"
    }
};