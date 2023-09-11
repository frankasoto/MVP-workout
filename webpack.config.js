const path = require('path')

module.exports = {
  entry: path.join(__dirname,'client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader'

        },
        exclude: /node_modules/
     }
    ]
 },

}