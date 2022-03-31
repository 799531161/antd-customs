import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";
import { WebpackConfigType } from "./webpack";
import HappyPack from "happypack";
const isDevelopment = process.env.NODE_ENV !== "production";

const config: WebpackConfigType = {
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/[name].[chunkhash:8].js",
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.join(__dirname, "../src/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [isDevelopment ? "react-refresh/babel" : ""].filter(
                Boolean
              ),
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        // .css 解析
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        // .less 解析
        test: /\.less$/,
        // exclude: /node_modules/,
        use: [
          // {
          MiniCssExtractPlugin.loader,
          // },
          // "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                // auto: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
          {
            loader: "less-loader",
            options: { lessOptions: { javascriptEnabled: true } },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/pages/index.html"),
      filename: "index.html",
      inject: "body",
    }),
    isDevelopment &&
      new HappyPack({
        loaders: ["babel-loader"],
      }),
    new MiniCssExtractPlugin({
      filename: "static/styles/[name].css",
      ignoreOrder: false,
    }),

    new webpack.ProgressPlugin(),
  ].filter(Boolean),
  stats: "errors-warnings",
};

export default config;
