interface GetVideoOptions {
  linkBaseUrl: string;
  isMobile: boolean;
  src: string;
  title: string;
  channel: string;
}

const getVideoOptions = ({ channel, linkBaseUrl, isMobile, src, title }: GetVideoOptions) => ({
  linkBaseUrl,
  isMobile,
  "duration": 164000,
  src,
  title,
  "source": "Commercial",
  "playerId": "default",
  "preload": "none",
  "initialVideo": true,
  "poster": "https://i.dailymail.co.uk/i/MOL-17584/bravo_hp_preview.jpg",
  "syndicationService": null,
  "children": {
    "controlBar": {
      "isSocialControlsHidden": true
    }
  },
  "plugins": {
    "ads-setup": {
      "adsEnabled": false
    },
    "commercial-banner": {
      "end-screen-img": "https://i.dailymail.co.uk/i/MOL-17584/bravo_hp_endstate.jpg",
      "impression-urls": [
        "https://pubads.g.doubleclick.net/gampad/ad?iu=/424397508/dailymail.uk/advertorial&sz=1x1&environment=bravo&t=1&c=123456"
      ],
      "click-tracker-urls": [],
      "clickThrough-url": "https://pubads.g.doubleclick.net/gampad/clk?id=5030863082&iu=/424397508/dailymail.uk/advertorial"
    },
    "tracking": {
      "channelShortName": channel || 'news',
      "sponsored": null,
      "referenceId": 17584,
      "trackingType": "commercial-banner-player"
    }
  },
  "videoId": "17584",
  "descr": "Below Deck Mediterranean is coming to the south of France",
  "referenceId": "17584"
});

export { getVideoOptions };
