/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  // the app entry point is /src/index.tsx
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    // All the files in the src folder will get transpiled into the bundle.js file inside the build folder.
    path: path.resolve(__dirname, "build"),
    // the filename of the JS bundle will be bundle.js
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // for any file with a suffix of tsx
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html", inject: "body" }),
  ],
};
