import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";

type Mode = "development" | "production" | "none";

const mode: Mode = process.env.NODE_ENV === 'development' && 'development' || 'production';

const common: Configuration = {
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: '[name].css'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules']
  },
  stats: "errors-warnings",
}

export { common };
