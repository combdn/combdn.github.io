import React from 'react';
import { Link } from '@reach/router';

import './header.scss';

export default function Header() {
  return (
    <div className="header__intro">
      <div className="contacts">
        <div className="contact">
          <a href="mailto:combdn@gmail.com">combdn@gmail.com</a>
        </div>
        <div className="contact">
          <a
            href={process.env.PUBLIC_URL + 'Valery-Sibikovsky-Resume-v002.pdf'}
          >
            Résumé
          </a>
        </div>
      </div>

      <div className="intro">
        <p>
          Hi, I'm Valery. I’m obsessed with software user interfaces. (I
          literally have 321 items in my “Applications” folder right now.)
        </p>
        <p>
          ↓These are some bits of my works. Some are simple and obvious{' '}
          <span role="img" aria-label="piece of cake">
            🍰
          </span>
          , and others are complex{' '}
          <span role="img" aria-label="piece of cake">
            🤯
          </span>
          , some of them are quick proofs of concepts{' '}
          <span role="img" aria-label="piece of cake">
            ✏️
          </span>
          . I’ve only managed to write <Link to="/case/pw">one case</Link> so
          far… But if you’re interested, we could discuss any of them further.
          Just <a href="mailto:combdn@gmail.com">drop me a line.</a>
        </p>
      </div>
    </div>
  );
}
