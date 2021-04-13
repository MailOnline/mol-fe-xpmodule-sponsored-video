import path from 'path';

import { RuleSetRule } from 'webpack';

interface JavascriptRulesArgs {
  dirname: string;
  isDev: boolean;
  isServer: boolean;
}

type JavascriptRules = (args: JavascriptRulesArgs) => RuleSetRule[];

const javascriptRules: JavascriptRules = ({ dirname, isDev, isServer }) => [
  {
    test: /\.(js|tsx?)$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          configFile: isServer ? path.join(dirname,'..', 'tsconfig.json') : path.join(dirname, '../src/client/tsconfig.json'),
          transpileOnly: isDev
        }
      }
    ]
  }
];

export default javascriptRules;
