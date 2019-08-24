import React, { useEffect, useRef } from 'react';
import './viewer.scss';

export default function Viewer(props) {
  const reference = useRef();
  useEffect(() => {
    reference.current.focus();
  });
  return (
    <div
      ref={reference}
      className="viewer"
      onClick={props.clickHandler}
      onKeyDown={props.keyPressHandler}
      tabIndex="0"
    >
      <img alt="" src={props.image} />
    </div>
  );
}
