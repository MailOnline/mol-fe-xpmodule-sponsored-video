import React from 'react';

import { render } from "react-dom";
import { App } from "../shared/components/App/App";

const init = () => {
  if ((document.readyState === 'interactive' && Boolean(document.body)) || document.readyState === 'complete') {
    createApp();
  } else {
    document.addEventListener('DOMContentLoaded', createApp);
  }
};

const createApp = () => {
  Array.from(document.querySelectorAll('[data-sponsored-video]')).forEach((element) => {
    render(<App />, element);
  });
};

init();
