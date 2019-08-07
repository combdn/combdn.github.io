import React from 'react';
import './button.scss';

export default function Button(props) {
  return (
    <div
      role="button"
      className={'button'}
      onClick={() => props.clickHandler('home')}
    >
      <div className="label">{props.label}</div>
    </div>
  );
}
