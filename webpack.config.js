
// Guidance here: https://stanko.github.io/webpack-babel-react-revisited/

// Path configuration for convenience
const path = require('path');
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  APP: path.resolve(__dirname, 'src/app'),
};

// This plugin loads our app into our html
const hwp = require('html-webpack-plugin');
const htmlPlugin = new hwp({ template: path.join(paths.SRC, 'index.html') })

// Webpack configuration
const webpackRules = [
  { test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'] },
  { test: /\.css$/,
    use: ['style-loader','css-loader'] }
];
const config = {
  mode: 'development',
  watch: true,
  entry: path.join(paths.APP, 'index.jsx'),
  output: { path: paths.DIST, filename: 'bundle.js' },
  plugins: [ htmlPlugin ],
  module: { rules: webpackRules },
  resolve: {  extensions: ['.js', '.jsx'] },
  devtool: 'inline-source-map'
};

// Export our config object for webpack to use
module.exports = config;
