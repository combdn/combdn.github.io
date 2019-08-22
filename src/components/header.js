import React, { Component } from 'react';
import './header.scss';
import EmojiBlock from './emoji-block';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="header__intro">
        <p>
          Hi, I'm Valery. I’m obsessed with software user interfaces. (I
          literally have 321 items in my “Applications” folder right now.)
        </p>
        <p>
          ↓These are some bits of my works. Some are simple and obvious{' '}
          <span role="img" aria-label="piece of cake">
            🍰
          </span>
          , and others are too complex even to create a case about them{' '}
          <span role="img" aria-label="piece of cake">
            🤯
          </span>
          . (Some of them are quick proofs of concepts{' '}
          <span role="img" aria-label="piece of cake">
            ✏️
          </span>
          .) If you are interested, we could discuss any of them further. Just{' '}
          <a href="mailto:combdn@gmail.com">drop me a line.</a>
        </p>
      </div>
    );
  }
}

export default Header;
