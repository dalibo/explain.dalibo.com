const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './app/static/js/index.js',
    plan: './app/static/js/plan.js'
  },
  output: {
    path: path.resolve(__dirname, 'app/static/dist'),
    publicPath: 'dist',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  optimization: {
    // one runtime for all entrypoints
    runtimeChunk: 'single',
    // readable chunk ids even in production mode
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all'
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new AssetsPlugin({
      prettyPrint: true,
      entrypoints: true,
      filename: './app/static/dist/assets.json',
    })
  ],
  resolve: {
  alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: false
  }
};
