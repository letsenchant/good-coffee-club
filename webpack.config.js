const path = require('path');

module.exports = {
  entry: './source/index.js',
  output: {
    path: path.resolve(__dirname, '_public/assets/javascripts/bundled/'),
    filename: 'app.bundle.js'
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'source/'),
      components: path.resolve(__dirname, 'source/components/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'],
            "plugins": ["transform-object-rest-spread"]
          }
        }
      }
    ]
  }
};
