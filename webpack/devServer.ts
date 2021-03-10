import path from "path";
import { Configuration } from "webpack-dev-server";
import { webpackBundlesServer } from "@mol-fe/mol-fe-webpack-bundles/dist/server";
import { DevServerPayload } from "@mol-fe/mol-fe-webpack-bundles/dist/server/types";
import { name as pkgName } from '../package.json';

const xpModuleConfig: DevServerPayload = {
  name: pkgName,
  xpModules: {
    getValues: () => ({}),
    packageDir: path.resolve(__dirname, '..')
  }
};

const devServer: Configuration = {
  before: webpackBundlesServer({
    payloads: [xpModuleConfig],
    require
  }),
  contentBase: [
    './node_modules/@mol-fe/mol-fe-webpack-bundles/dist'
  ],
  disableHostCheck: true,
  publicPath: '/dist/',
  watchContentBase: true
};

export { devServer };
