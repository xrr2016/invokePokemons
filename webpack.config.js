const path = require('path')
const webpack = require('webpack')

const config = {
    entry: './src/main.js',
    output: {
        path: './dist/',
        filename: 'build.js',
        publicPath: '/'
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel'
          },
          {
            test:/\.css$/,
            loader:'style-loader!css-loader'
          }
      ]
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'src'
        ],
        alias: {
            'pokemon-gif': path.resolve('node_modules', 'pokemon-gif', 'lib', 'pokemon-gif.js')
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}

module.exports = config
