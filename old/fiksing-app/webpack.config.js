var path = require('path');

module.exports = {
    entry: './index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'transpiled.js'
    }
};
