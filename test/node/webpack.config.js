const { resolve } = require('path');

module.exports = {
    entry: './a.js',
    output: {
        path: resolve(__dirname, 'binary'),
        filename: '[name].bundle.js',
    },
};
