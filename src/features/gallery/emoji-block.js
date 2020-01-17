import React from 'react';
import './emoji-block.scss';
import { detect } from 'detect-browser';

export default function EmojiBlock(props) {
  const browser = detect();
  const cssClass = props.cssClass ? ' ' + props.cssClass : '';
  let browserClass = '';
  if (browser && browser.name === 'safari' && 'ios') {
    browserClass = 'emoji-block__browser-safari';
  } else {
    browserClass = 'emoji-block__browser-all';
  }
  return (
    <div className={'emoji-block__container' + cssClass}>
      <div className={browserClass}>
        <span role="img" aria-label="icon">
          {props.icon}
        </span>
      </div>
    </div>
  );
}
