import { RuleSetRule } from 'webpack';

import javascriptRules from './javascript';
import cssRules from './css';
import imageRules from './image';

interface RulesArgs {
  dirname: string;
  isDev: boolean;
  isServer: boolean;
}

type Rules = (args: RulesArgs) => RuleSetRule[];

const rules: Rules = ({dirname, isDev, isServer}: RulesArgs) => [
  ...javascriptRules({dirname, isDev, isServer}),
  ...cssRules({dirname}),
  ...imageRules({dirname})
];

export { rules };
