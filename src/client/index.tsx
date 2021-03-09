const init = () => {
  if ((document.readyState === 'interactive' && Boolean(document.body)) || document.readyState === 'complete') {
    createApp();
  } else {
    document.addEventListener('DOMContentLoaded', createApp);
  }
};

const createApp = () => {
  Array.from(document.querySelectorAll('[data-sponsored-video]')).forEach(() => {
    console.log('...should hydrate here...');
    // render(<App />, element);
  });
};

init();
