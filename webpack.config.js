const path = require('path');

module.exports = {
  mode: 'development', // production
  entry: {
    index: './src/index.js',
    data: './src/date.js',
    math: './src/math.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
  },
};
