import React from 'react';
import { renderToString } from "react-dom/server";

import { RenderArguments, Renderers } from "@mol-fe/mol-fe-registry-types";
import { baseUrl } from "../config/config";
import { VideoContainer } from "../../shared/components/VideoContainer/VideoContainer";
console.log(baseUrl);
const webRenderer: Renderers = {
  renderBody: ({ values }: RenderArguments) => {

    let body = '';

    if (values) {
      const { title, url, thumb, preview } = values;

      body = renderToString(
        <VideoContainer articleUrl={""} title={ title } url={ url } thumb={ thumb } previewText={ preview }/>
      );
    }

    return {
      body,
      headers: {
        'content-type': 'text/html'
      }
    }
  },
  renderHead: () => ({
    body: `
          <link rel="stylesheet" type="text/css" href="${ baseUrl }/index.css">
          <script defer src="${ baseUrl }/index.js"></script>`,
    headers: {
      'content-type': 'text/html'
    }
  }),
  renderHeadJson: () => ({
    body: {
      scripts: [`${ baseUrl }/index.js`],
      styles: [`${ baseUrl }/index.css`]
    },
    headers: {
      'content-type': 'application/json'
    }
  })
};

export { webRenderer };
