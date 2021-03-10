import React from 'react';

import { hydrate } from "react-dom";
import { Video } from "../shared/components/Video/Video";

const init = () => {
  if ((document.readyState === 'interactive' && Boolean(document.body)) || document.readyState === 'complete') {
    createApp();
  } else {
    document.addEventListener('DOMContentLoaded', createApp);
  }
};

const createApp = () => {
  console.log('..creating app..');
  Array.from(document.querySelectorAll('[data-sponsored-video] > video')).forEach((element) => {
    console.log(element);
    hydrate(<Video />, element);
  });
};

init();
