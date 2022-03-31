import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { merge } from "webpack-merge";
import { WebpackConfigType } from "./webpack";
import config from "./webpack.config";
import HappyPack from "happypack";
import path from "path";
const ReactRefreshTypeScript = require("react-refresh-typescript");

const devConfig: WebpackConfigType = {
  target: "web",
  mode: "development",

  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx|ts|tsx)$/,
  //       // use: ["happypack/loader"],
  //       // include: path.resolve(__dirname, "src"),
  //       exclude: /node_modules/,
  //       use: [
  //         {
  //           loader: "babel-loader",
  //           options: {
  //             plugins: ["react-refresh/babel"],
  //             cacheDirectory: true,
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  plugins: [new ReactRefreshWebpackPlugin()],
  devtool: "source-map",
  devServer: {
    open: false,
    hot: true,
  },
};
export default merge(config, devConfig);
