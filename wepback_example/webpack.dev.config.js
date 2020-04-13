module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    './src/index'
],
  output: {
    filename: "app.js",
    path: __dirname,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.ts']
},
  devServer: {
     compress: true,
     host: '127.0.0.1',
     port: 8080,
     

},
}