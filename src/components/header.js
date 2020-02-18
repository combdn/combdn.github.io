import React from 'react';

import useFiles from './useFiles';
import CaseThumbnail from './case-thumbnail';

import './header.scss';

export default function Header() {
  let { images } = useFiles();

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
          <span>Hi, I'm Valery Sibikovsky.</span> I’m obsessed with software
          user interfaces. (I literally have 321 items in my “Applications”
          folder right now.) And, during my lifetime, I humbly hope to create an
          interface of equal importance to the Arabic numerals{' '}
          <span role="img" aria-label="smile">
            😁
          </span>
          . (Or, at least, take part in the creation of one.)
        </p>
        <p>
          ↓These are some bits of my works. Some are simple and obvious{' '}
          <span role="img" aria-label="piece of cake">
            🍰
          </span>
          , and others are complex{' '}
          <span role="img" aria-label="mind blown">
            🤯
          </span>
          , some of them are quick proofs of concepts{' '}
          <span role="img" aria-label="a pencil">
            ✏️
          </span>
          , but I suppose you can tell that I like to work on unusual stuff.
        </p>
        <p>
          If you want to know more,{' '}
          <a href="mailto:combdn@gmail.com">drop me a line.</a>
        </p>
      </div>

      <div className="cases">
        <h2>Case Studies</h2>
        <div className="thumbnails">
          <CaseThumbnail
            image={images['images/case-thumbnails/pw.png']}
            name="Risk Calculation Tool"
            underConstruction={false}
            link={'/case/pw'}
          />
          <CaseThumbnail
            image={images['images/case-thumbnails/automation.png']}
            name="Reinventing the Stage Automation"
            underConstruction={false}
            link={'/case/automation'}
          />
          <CaseThumbnail
            image={images['images/case-thumbnails/industrial-monitoring.png']}
            name="Industrial Monitoring"
            underConstruction={true}
          />
        </div>
      </div>
    </div>
  );
}
