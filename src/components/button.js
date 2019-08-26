import React from 'react';
import { navigate } from '@reach/router';
import './button.scss';

export default function Button(props) {
  return (
    <div role="button" className={'button'} onClick={() => navigate('/')}>
      <div className="label">{props.label}</div>
    </div>
  );
}
