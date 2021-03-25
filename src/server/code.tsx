import { RenderBody, RenderHead, RenderHeadJson, XpModule } from '@mol-fe/mol-fe-registry-types';
import { webRenderer } from "./renderers/webRenderer";

declare const xpModule: XpModule;

export const renderHeadJson: RenderHeadJson = ({ env }) => {
  return webRenderer.renderHeadJson({ env });
};

export const renderHead: RenderHead = ({ env }) => {
  return webRenderer.renderHead({ env });
};

export const renderBody: RenderBody = async ({ env, values }) => {
  return webRenderer.renderBody({ env, values });
};

xpModule.exports = {
  renderBody,
  renderHead,
  renderHeadJson
};
