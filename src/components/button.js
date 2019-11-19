import React from 'react';
import './button.scss';

export default function Button({
  look,
  label,
  additionalClasses,
  clickHandler
}) {
  let buttonClasses = 'button';
  switch (look) {
    case 'light':
      buttonClasses += ' light';
      break;
    case 'dark':
      buttonClasses += ' dark';
      break;
    default:
      buttonClasses += ' light';
      break;
  }

  buttonClasses += ` ${additionalClasses}`;

  return (
    <div role="button" className={buttonClasses} onClick={clickHandler}>
      <div className="label">{label}</div>
    </div>
  );
}
