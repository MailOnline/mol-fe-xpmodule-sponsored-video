import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';
import { getVideoOptions } from "./getVideoOptions";

interface Args {
  title: string;
  url: string;
  thumb: string;
  previewText: string;
  articleUrl: string;
}

const classes = classNames('vjs-video-container', 'vjs-fixed', 'vjs-span-two-col', 'news', styles.videoContainer);

const VideoContainer: React.FC<Args> = ({ url, title }: Args) => {
  const articleUrl = '';

  return (
    <div className={ classes } style={ { marginBottom: '65px' } }>
      <video id="commercial-banner-player-article" className={ classNames('video-js', 'vjs-default-skin') }
             controls preload="none"
             data-opts={ getVideoOptions({ title, src: url, isMobile: false, linkBaseUrl: articleUrl }) }
      >
        <source src={ url } type=' video/mp4'/>
        <p className="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser
          that <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noreferrer">supports HTML5 video</a></p>
      </video>
    </div>
  );
}

export { VideoContainer };
