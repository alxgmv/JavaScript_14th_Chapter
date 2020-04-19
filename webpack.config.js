module.exports = {
  entry: './index.js',
  output: {
    filename: 'bild.js',
    // path: './build'
  },

  module:{
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  }

};
