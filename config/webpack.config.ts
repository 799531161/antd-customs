import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";
import { WebpackConfigType } from "./webpack";
import HappyPack from "happypack";
import theme from "./theme";
const isDevelopment = process.env.NODE_ENV !== "production";

const config: WebpackConfigType = {
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/[name].[chunkhash:8].js",
  },
  externals: isDevelopment
    ? {}
    : {
        react: "react",
        "react-dom": "react-dom",
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
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  "primary-color": "#f5222d",
                  // "primary-color": "#1DA57A",
                  // "link-color": "#1DA57A",
                  // "border-radius-base": "2px",
                },
              },
            },
          },
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
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  // ...theme,
                  "primary-color": "#f5222d",
                  // "link-color": "#1DA57A",
                  // "border-radius-base": "2px",
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new HappyPack({
    //   id: "babel", // 唯一标识符
    //   // 使用的loader配置改写到happypack的配置项中
    //   use: [
    //     {
    //       loader: "babel-loader",
    //       options: {
    //         plugins: [isDevelopment ? "react-refresh/babel" : ""].filter(
    //           Boolean
    //         ),
    //         // cacheDirectory: true,
    //       },
    //     },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/pages/index.html"),
      filename: "index.html",
      inject: "body",
      // cdn: {
      //   js: [
      //     "https://cdn.bootcdn.net/ajax/libs/react-is/17.0.2/cjs/react-is.production.min.js",
      //   ],
      // },
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
