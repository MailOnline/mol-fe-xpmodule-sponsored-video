import path from 'path';

import { RuleSetRule } from 'webpack';

interface ImageRulesArgs {
  dirname: string;
}

type ImageRules = (args: ImageRulesArgs) => RuleSetRule[];

const imageRules: ImageRules = ({ dirname }) => [
  {
    include: path.resolve(dirname, 'src'),
    test: /\.(png|jpg|gif|svg)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  }
];

export default imageRules;
