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
    <div className={ styles.titleContainer }>
      <div className={ styles.title }>{ props.title }</div>
    </div>
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */ }
    <video controls>
      <source
        src={ props.url }/>
    </video>
  </div>
);

export { Video };
