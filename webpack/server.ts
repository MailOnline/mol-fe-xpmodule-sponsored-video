import path from "path";
import { Configuration } from 'webpack';
import { merge } from "webpack-merge";
import { common } from "./common";
import { rules } from "./rules/rules";

const isDev = process.env.NODE_ENV === 'development';

const config: Configuration = {
  entry: {
    code: `${path.resolve(__dirname, '..', 'src', 'server')}/code.tsx`,
    config: `${path.resolve(__dirname, '..', 'src', 'server')}/config.ts`,
  },
  module: {
    rules: rules({
      dirname: __dirname,
      isDev,
      isServer: true
    }),
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'server')
  },
  target: 'node'
};

export default merge<Configuration>(config, common);
