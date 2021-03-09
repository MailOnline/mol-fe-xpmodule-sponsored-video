import path from "path";
import { Configuration } from "webpack-dev-server";
import { webpackBundlesServer, createCljfeProxyConfig } from "@mol-fe/mol-fe-webpack-bundles";
import { DevServerPayload } from "@mol-fe/mol-fe-webpack-bundles/dist/server/types";
import { name as pkgName } from '../package.json';

const xpModuleValues = {};

const xpModuleConfig: DevServerPayload = {
  name: pkgName,
  xpModules: {
    getValues: () => xpModuleValues,
    packageDir: path.resolve(__dirname, '..')
  }
};

const devServer: Configuration = {
  before: webpackBundlesServer({
    payloads: [xpModuleConfig],
    require
  }),
  contentBase: './dist/',
  disableHostCheck: true,
  proxy: {
    ...createCljfeProxyConfig({
      htmlPageQueryBuilder: () => 'mobile=true'
    })
  },
  watchContentBase: true
};

export { devServer };
