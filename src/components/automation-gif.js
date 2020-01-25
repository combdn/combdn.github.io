import React, { useState } from 'react';

import './automation-gif.scss';

export default function AutomationGif({ gif, png, className, style }) {
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
    </div>
  );
}
