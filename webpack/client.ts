import path from "path";
import { merge } from "webpack-merge";
import { Configuration as WDSConfiguration } from "webpack-dev-server";
import { Configuration as WebpackConfiguration } from 'webpack';
import { common } from "./common";
import { rules } from "./rules/rules";
import { devServer } from "./devServer";

interface Configuration extends WebpackConfiguration {
  devServer?: WDSConfiguration;
}

const isDev = process.env.NODE_ENV === 'development';

const config: Configuration = {
  devServer,
  devtool: 'source-map',
  entry: {
    index: `${path.resolve(__dirname, '..', 'src', 'client')}/index.tsx`,
  },
  mode: isDev && 'development' || 'production',
  module: {
    rules: rules({
      dirname: __dirname,
      isDev,
      isServer: false
    })
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'client')
  },
  target: 'web'
};

export default merge<Configuration>(config, common);
