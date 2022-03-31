import { Configuration } from "webpack-dev-server";
import { Configuration as BaseConfiguration } from "webpack";
export interface WebpackConfigType extends BaseConfiguration, Configuration {}
