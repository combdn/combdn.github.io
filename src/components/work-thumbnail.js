import React from 'react';
import './work-thumbnail.scss';

export default function WorkThumbnail(props) {
  if (props.type === 'image') {
    return (
      <div
        className={props.wrapperClass + ' wrapper'}
        onClick={e => props.clickHandler(props.project)}
      >
        <img alt="" className={props.class} src={props.file} />
      </div>
    );
  } else if (props.type === 'video') {
    return (
      <div className={props.wrapperClass + ' wrapper'}>
        <video
          // FIXME: enable temporary disabled autoplay
          //autoPlay
          playsInline
          muted={true}
          loop
          className={props.class}
          src={props.file}
        />
      </div>
    );
  }
}
