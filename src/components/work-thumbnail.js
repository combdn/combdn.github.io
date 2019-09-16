import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import './work-thumbnail.scss';

export default function WorkThumbnail(props) {
  const [selected, setSelected] = useState(false);
  const [wrapperClasses, setWrapperClasses] = useState(
    props.wrapperClass + ' wrapper'
  );

  // TODO: finish selected state handling
  const handleClick = () => {
    setSelected(current => {
      if (current) {
        console.log('selected == true');

        setWrapperClasses(props.wrapperClass + ' wrapper');
        return false;
      } else {
        console.log('selected == false');
        setWrapperClasses(current => {
          console.log('about to return wrapper + selected:');
          console.log(current + ' selected');
          return current + ' selected';
        });
        return true;
      }
    });
    console.log('about to run props.clickHandler');
    //props.clickHandler(props.identificator);
  };

  // Return image
  if (props.type === 'image') {
    return (
      <div className={wrapperClasses} onClick={handleClick}>
        <img alt="" className={props.class} src={props.file} />
      </div>
    );
  }

  // Return video
  else if (props.type === 'video') {
    return (
      <div className={wrapperClasses} onClick={handleClick}>
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
