const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

/**
 * @type {import('webpack').Configuration}.config
 */
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           plugins: ['lodash'],
  //           presets: [['env']]
  //         }
  //       }
        
  //     }
  //   ]
  // },
  plugins: [
    new BundleAnalyzerPlugin(),
    // new LodashModuleReplacementPlugin(),
  ],
};
