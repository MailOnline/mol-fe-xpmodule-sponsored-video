import React from 'react';
import { renderToString } from "react-dom/server";

import { Renderers } from "@mol-fe/mol-fe-registry-types";
import { baseUrl } from "../config/config";
import { Video } from "../../shared/components/Video/Video";

const webRenderer: Renderers = {
  renderBody: () => ({
    body: renderToString(
      <div data-sponsored-video>
        <Video/>
      </div>
    ),
    headers: {
      'content-type': 'text/html'
    }
  }),
  renderHead: () => ({
    body: `
          <link rel="stylesheet" type="text/css" href="${ baseUrl }/index.css">
          <script defer src="${baseUrl}/index.js"></script>`,
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
