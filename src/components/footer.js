import React from 'react';

import Button from './button';
import twitterIcon from '../assets/images/icons/twitter-icon.svg';
import twitterIconBlue from '../assets/images/icons/twitter-icon-blue.svg';

import './footer.scss';

export default function Footer(props) {
  if (props.variant === 'case') {
    return (
      <footer className="case-footer">
        <Button
          label={'← Home'}
          clickHandler={props.onHomeClick}
          look="dark-outline"
        />
        <p>
          <a href="mailto:combdn@gmail.com">combdn@gmail.com </a>
        </p>
        <p>
          <a className="social-icon" href="https://twitter.com/combdn">
            <img src={twitterIconBlue} alt="Twitter" />
          </a>
        </p>
      </footer>
    );
  }
  return (
    <footer className="home-footer">
      {/* <p>
        If you ask designers for help, and they look at you like this →{' '}
        <span role="img" aria-label="grinning face with a sweat drop">
          😅
        </span>
        , it&nbsp;is the sign that it may be interesting&nbsp;for&nbsp;me.
      </p> */}
      <p>
        <a href="mailto:combdn@gmail.com">combdn@gmail.com </a>
      </p>
      <p>
        <a className="social-icon" href="https://twitter.com/combdn">
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </p>
    </footer>
  );
}
