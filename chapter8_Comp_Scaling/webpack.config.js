
module.exports = {

  entry: './src/index.js',

  module: {

    rules: [
      {

        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
    test: /\.jsx?$/,

    exclude: /node_modules/,

    use: [

      {

        loader: 'babel-loader',  

        options: {

          presets: ['@babel/react']

        }

      },

    ]
 },
   {
         test: /\.(png|svg|jpg|gif)$/,
       use: [
         'file-loader',
         ],
       },
 ]
  },

  resolve: {

    extensions: ['*', '.js', '.jsx']

  },

  output: {

    path: __dirname + '/dist',

    publicPath: '/',

    filename: 'main.js'

  },
  

  devServer: {
	  
    publicPath:"/", 

    contentBase: "./dist",

    hot: true

  }
  
 
};
