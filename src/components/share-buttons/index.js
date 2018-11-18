import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

import './style.css';

const ShareButtons = ({ title, body, theme = 'white' }) => {
  const pageUrl = window.location.href;
  return (
    <div className="share-buttons">
      <FacebookShareButton
        url={pageUrl}
        quote={title}
        hashtag={'#TruitMeGood'}
      >
        <FacebookIcon
          size={32}
          round
          iconBgStyle={{ fill: 'transparent', stroke: theme }}
          logoFillColor={theme}
        />
      </FacebookShareButton>
      <TwitterShareButton
        url={pageUrl}
        title={title}
        via={'Jeremie__'}
        hashtags={['TruitMeGood']}
      >
        <TwitterIcon
          size={32}
          round
          iconBgStyle={{ fill: 'transparent', stroke: theme }}
          logoFillColor={theme}
        />
      </TwitterShareButton>
      <TelegramShareButton url={pageUrl} title={title}>
        <TelegramIcon
          size={32}
          round
          iconBgStyle={{ fill: 'transparent', stroke: theme }}
          logoFillColor={theme}
        />
      </TelegramShareButton>
      <WhatsappShareButton url={pageUrl} title={title}>
        <WhatsappIcon
          size={32}
          round
          iconBgStyle={{ fill: 'transparent', stroke: theme }}
          logoFillColor={theme}
        />
      </WhatsappShareButton>
      <EmailShareButton
        url={pageUrl}
        subject={title}
        body={`${body}\n${pageUrl}`}
      >
        <EmailIcon
          size={32}
          round
          iconBgStyle={{ fill: 'transparent', stroke: theme }}
          logoFillColor={theme}
        />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
