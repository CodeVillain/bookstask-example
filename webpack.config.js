const webpack = require('webpack');
const { resolve } = require('path');
const Config = require('webpack-config').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const config = new Config();

config.merge({
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.[hash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2', 'react'],
              plugins: [
                'react-hot-loader/babel'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
      inject: 'body'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),
    new webpack.NamedModulesPlugin(),
  ]
});

/**
 * Development
 */
if (isDev) {
  config.merge({
    output: {
      pathinfo: true
    },
    devServer: {
      contentBase: './public',
      hot: true,
      inline: true,
      historyApiFallback: true,
      noInfo: true,
      quiet: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}


/**
 * Production
 */
if (isProd) {
  config.merge({
    devServer: {
      compress: true
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false,
          beautify: false
        },
      })
    ]
  });
}

module.exports = config;
