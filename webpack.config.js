module.exports = {
  entry:  './www/react/components.js',
  output: {
    path: './',
    filename: './www/bundle.js'
  },
  module: {
    loaders: [
      // Transform JSX in .jsx files
      {
        test: /\.jsx$/,
        loader:'jsx-loader?insertPragma=React.DOM&harmony',
      }
    ],
  },
  resolve: {
    // Allow require('./blah') to require blah.jsx
    extensions: ['', '.js', '.jsx']
  }
};
