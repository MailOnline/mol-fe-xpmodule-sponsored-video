import path from "path";
import { Configuration } from "webpack-dev-server";
import { webpackBundlesServer } from "@mol-fe/mol-fe-webpack-bundles/dist/server";
import { DevServerPayload } from "@mol-fe/mol-fe-webpack-bundles/dist/server/types";
import { name as pkgName } from '../package.json';

const xpModuleValues = {
  title: 'Aussies on the Med',
  // url: 'https://video.dailymail.co.uk/video/mol/2019/04/10/5992941007543840784/960x540_MP4_5992941007543840784.mp4'
};

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
  contentBase: [
    './node_modules/@mol-fe/mol-fe-webpack-bundles/dist'
  ],
  disableHostCheck: true,
  publicPath: '/dist/',
  watchContentBase: true
};

export { devServer };
