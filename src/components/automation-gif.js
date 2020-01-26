import React, { useState } from 'react';
import { ReactComponent as PlayButton } from '../assets/images/icons/controls/gif/play-button.svg';

import './automation-gif.scss';

export default function AutomationGif({
  gif,
  png,
  className,
  style,
  description
}) {
  const [playing, setPlaying] = useState(false);
  const [cssClass, setCssClass] = useState('gif-loop stop ' + className);

  let togglePlay = () => {
    if (playing) {
      setCssClass('gif-loop stop ' + className);
      setPlaying(false);
    } else {
      setCssClass('gif-loop play ' + className);
      setPlaying(true);
    }
  };

  return (
    <div className={cssClass} style={style} onClick={togglePlay}>
      <img src={gif} className="gif" alt="" />
      <img src={png} className="png" alt="" />
      <div className="overlay">
        <PlayButton />
        <div className="description">{description}</div>
      </div>
    </div>
  );
}
