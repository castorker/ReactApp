const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

const config = {
    entry: APP_DIR + '/Greeting.js',
    devServer: {
        contentBase: PUBLIC_DIR,
        port: 9000,
        open: true
    },
    output: {
        path: PUBLIC_DIR,
        filename: 'bundle.js'
    }
};

module.exports = config;