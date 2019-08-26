import React from 'react';
import { Router, Link } from '@reach/router';
import './work-thumbnail.scss';

export default function WorkThumbnail(props) {
  if (props.project && props.type === 'image') {
    return (
      <div className={props.wrapperClass + ' wrapper'}>
        <Link to={'case/' + props.project.toLowerCase()}>
          <img alt="" className={props.class} src={props.file} />
        </Link>
      </div>
    );
  }

  if (props.type === 'image') {
    return (
      <div className={props.wrapperClass + ' wrapper'}>
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
