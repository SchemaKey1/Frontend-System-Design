const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  mode: "development",
  target: "web",
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    hot: true,
    liveReload: true,
    port: 3001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
