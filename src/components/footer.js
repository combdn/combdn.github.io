import React, { Component } from 'react';
import twitterIcon from '../assets/images/icons/twitter-icon.svg';
import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          If you ask designers for help, and they look at you like this → 😅,
          it&nbsp;is the sign that it may be interesting&nbsp;for&nbsp;me.
        </p>
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
}
