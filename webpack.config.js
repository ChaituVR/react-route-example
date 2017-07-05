module.exports = {
  entry:  __dirname +'/app/main.js',
  output: {
    path:  __dirname +'/app',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase:  __dirname +'/app',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
