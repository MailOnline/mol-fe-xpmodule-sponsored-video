import React from 'react';

import styles from './styles.scss';

interface Args {
  title: string;
  url: string;
  thumb: string;
  previewText: string;
}

const Video: React.FC<Args> = (props: Args) => (
  <div className={ styles.videoContainer }>
    <h3>{props.title}</h3>
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */ }
    <video controls>
      <source
        src="https://video.dailymail.co.uk/video/mol/2019/04/10/5992941007543840784/960x540_MP4_5992941007543840784.mp4"/>
    </video>
  </div>
);

export { Video };
