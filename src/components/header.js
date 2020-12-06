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
            href={process.env.PUBLIC_URL + 'Valery-Sibikovsky--Resume-v003.pdf'}
          >
            Résumé
          </a>
        </div>
      </div>

      <div className="intro">
        <header>
          <h1>
            Hi!{' '}
            <span role="img" aria-label="Waving hand">
              👋
            </span>{' '}
            I’m Valery Sibikovsky,
          </h1>
          <p>a human interface designer.</p>
        </header>
        <p>
          I have worked on software for stage automation, actuaries, industrial
          monitoring, aircraft inspection, etc. It was fun, but now I want my
          work to change people’s lives in a big way. Or, at least, in a small
          way but on a huge scale.
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
