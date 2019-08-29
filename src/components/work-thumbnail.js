import React, { useState } from 'react';
import { Router, Link, navigate } from '@reach/router';
import './work-thumbnail.scss';

export default function WorkThumbnail(props) {
  let hoverClass = '';

  const handleClick = () => {
    props.clickHandler(props.identificator);
  };

  if (props.project === props.projectUnderHover) {
    hoverClass = 'work-thumbnail__project-highlight';
  }

  if (props.project && props.type === 'image') {
    return (
      <div
        className={props.wrapperClass + ' wrapper' + ' ' + hoverClass}
        // onClick={() => navigate('case/' + props.project.toLowerCase())}
        onClick={handleClick}
        // onPointerEnter={e => props.hoverHandler(props.project, true)}
        // onPointerLeave={e => props.hoverHandler(props.project, false)}
      >
        <img alt="" className={props.class} src={props.file} />
      </div>
    );
  }

  if (props.type === 'image') {
    return (
      <div className={props.wrapperClass + ' wrapper'} onClick={handleClick}>
        <img alt="" className={props.class} src={props.file} />
      </div>
    );
  } else if (props.type === 'video') {
    return (
      <div className={props.wrapperClass + ' wrapper'} onClick={handleClick}>
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
