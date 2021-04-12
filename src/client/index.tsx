import React from 'react';
import { hydrate } from "react-dom";

import { VideoContainer } from "../shared/components/VideoContainer/VideoContainer";

interface WinWithDM extends Window {
  DM?: {
    molFePageMetadata: {
      getPageCriteria: () => { channel: string; }
    }
  };
}

const init = () => {
  if ((document.readyState === 'interactive' && Boolean(document.body)) || document.readyState === 'complete') {
    createApp();
  } else {
    document.addEventListener('DOMContentLoaded', createApp);
  }
};

const createApp = () => {
  Array.from(document.querySelectorAll('[data-sponsored-video] > video')).forEach((element) => {
    const DM = (window as WinWithDM).DM;

    const meta = DM && DM.molFePageMetadata && DM.molFePageMetadata.getPageCriteria();

    hydrate(<VideoContainer channel={ meta && meta.channel || 'news' } articleUrl="" previewText="" thumb="" url=""
                            title=""/>, element);
  });
};

init();
