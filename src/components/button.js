import React from 'react';
import './button.scss';

import closeIcon from '../assets/images/icons/controls/close.svg';

export default function Button({
  look,
  label,
  additionalClasses,
  clickHandler
}) {
  let buttonClasses = 'button';
  let buttonContents = <div className="label">{label}</div>;

  switch (look) {
    case 'light':
      buttonClasses += ' light';
      break;
    case 'dark':
      buttonClasses += ' dark';
      break;
    case 'close':
      buttonClasses += ' close';
      buttonContents = <img src={closeIcon} alt="Close" />;
      break;
    default:
      buttonClasses += ' light';
      break;
  }

  buttonClasses += ` ${additionalClasses}`;

  return (
    <div role="button" className={buttonClasses} onClick={clickHandler}>
      {buttonContents}
    </div>
  );
}
