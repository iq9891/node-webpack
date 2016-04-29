var path = require('path');

console.log();
module.exports = {
    // entry: path.resolve(__dirname, 'app/main.js'),
    entry: [
      'webpack/hot/dev-server',//自动刷新
      `webpack-dev-server/client?http://localhost:${process.env.npm_package_config_port}`,//自动刷新
      path.resolve(__dirname, 'app/main.js')
    ],
    devServer: {
      inline:true,
      port: process.env.npm_package_config_port
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    }
};
