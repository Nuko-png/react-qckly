module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/src/',
      filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    stats: {
     colors: true,
     reasons: true
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          loaders: ['babel-loader']
        }
      ]
    },
    devServer: {
      hot: true
    },
  }