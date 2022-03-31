import { merge } from "webpack-merge";
import { WebpackConfigType } from "./webpack";
import config from "./webpack.config";
const prodConfig: WebpackConfigType = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  //   devtool: "none",
};
export default merge(config, prodConfig);
