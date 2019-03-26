const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js')
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(['build'], { root: Path.resolve(__dirname, '..') }),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public'), to: 'public' }
    ]),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html')
    })
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
      'TweenLite': Path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      'TweenMax': Path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      'TimelineLite': Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      'TimelineMax': Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      'ScrollMagic': Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
    'animation.gsap': Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
    ]
  }
};
