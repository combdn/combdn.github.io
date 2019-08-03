import React from 'react';
import { detect } from 'detect-browser';

export default function CasePW(props) {
  const browser = detect();
  let iconClass = '';
  if (browser && browser.name === 'safari') {
    iconClass = 'icon-safari';
  } else {
    iconClass = 'icon';
  }

  return (
    <div className="case">
      <h1>Insurance Risk Simulation Applications</h1>
      <div className="goal">
        <div className={iconClass}>
          <span role="img" aria-label="icon">
            🎯
          </span>
        </div>
        <div>
          <span>Goal:</span> add two applications to the insurance simulation
          suite. One — to visually build simulation jobs, the ohter — to intall
          and run them.
        </div>
      </div>
      <p className="copy">
        After the first discussion with the team I came up with the concept that
        was based on how similar tasks (mostly one-direction data flow with some
        logic) was handled in VFX industry: i. e. boxes connected with wires.
      </p>

      {/* TODO: get access to images and videos  */}
      <video src="" />
    </div>
  );
}
