/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const prod = process.env.NODE_ENV === "production";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: prod ? "production" : "development",
  // mode: "production",
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
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".tsx", ".ts", ".js", ".json"],
        },
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          url: true,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
    ],
  },
  devtool: prod ? undefined : "source-map",

  plugins: [
    new Dotenv({
      systemvars: true,
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html", inject: "body" }),
  ],
  devServer: {
    static: "./build",
    // hot: false,
    hot: true,
    historyApiFallback: true, //for react-router
    // inline: true,
    // transportMode: "ws",
    // injectClient: false,
    // overlay: true,
  },
};
