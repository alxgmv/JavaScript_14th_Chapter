const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let conf = {
  entry: './index.js',
  output: {
    filename: 'build.js',
  },
  optimization: {
  minimizer: [new UglifyJsPlugin()],
  },
  plugins: [new MiniCssExtractPlugin("button.css")],
  module:{
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devtool: 'source-map'
};
module.exports = () => {
    return conf;
}
