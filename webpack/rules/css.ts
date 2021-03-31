import path from 'path';

import autoprefix from 'autoprefixer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import postCssNested from 'postcss-nested';

interface CSSRulesArgs {
  dirname: string;
}

type CssRules = (args: CSSRulesArgs) => RuleSetRule[];

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [autoprefix(), postCssNested()],
    sourceMap: true
  }
};

const cssRules: CssRules = ({ dirname }) => [
  {
    test: /\.s?css$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          localIdentName: '[local]-[hash:base64:5]',
          modules: true,
          sourceMap: true
        }
      },
      postCssLoader
    ]
  },
  {
    include: path.resolve(dirname, 'node_modules'),
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', postCssLoader]
  }
];

export default cssRules;
