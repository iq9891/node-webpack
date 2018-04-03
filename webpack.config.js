const path = require('path');
// 分离样式文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
        ]
      },
      {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
             "css-loader",
             "sass-loader"
           ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    // extractSass
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "../dist/[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
