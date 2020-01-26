import React from 'react';
import uuid from 'uuid/v4';
import balanceText from 'balance-text';
import { navigate } from '@reach/router';

import useFiles from './useFiles';
import Button from './button';
import AutomationGif from './automation-gif';

import './case.scss';
import './case-automation.scss';

export default function CasePw(props) {
  const { images, videos } = useFiles();

  // Find the gif keys in automation-gifs/ path.
  let gifKeys = Object.keys(images).filter(
    value => value.indexOf('.gif') >= 0 && value.indexOf('automation-gifs') >= 0
  );

  let gifPngPairs = [];

  // Create GIF/PNG pairs
  // We assume that there's the 'cover' PNG with the same name.
  gifKeys.forEach(key => {
    let pngKey = key.replace(/\.gif/, '.png');
    gifPngPairs.push({ gif: images[key], png: images[pngKey] });
  });

  let gifs = [];

  let numberOfPairs = gifPngPairs.length;
  gifPngPairs.forEach((pair, index) => {
    gifs.push(
      <AutomationGif
        className="automation-gif"
        gif={pair.gif}
        png={pair.png}
        key={uuid()}
        style={{ zIndex: `${numberOfPairs - index}` }}
      />
    );
  });

  return (
    <article>
      <Button
        label={'← Gallery'}
        clickHandler={() => navigate('/')}
        look="light-bright"
      />
      <section className="intro">
        <div className="section-grid">
          <div className="intro-on-black">
            <h1>New Paradigm for the Stage Automation Software</h1>
            <div className="goal">
              {/* <EmojiBlock icon="🎯" /> */}
              <div className="case__emoji">
                <span role="img" aria-label="icon">
                  🎯
                </span>
              </div>
              <div>
                <span className="first-word">Goal:</span> add two applications
                to the insurance simulation suite. One — to visually build
                simulation jobs, the other — to install and run them.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main">
        <div className="section-grid">
          <p>
            After the first discussion with the team, I came up with the concept
            that was based on how similar tasks (mostly one-direction data flow
            with some logic) are handled in VFX industry: i. e. boxes connected
            with wires.
          </p>

          <figure>
            <img
              src={images['images/automation-save-file-on-the-console.png']}
              alt="Saving file on the console"
            />
            <figcaption className="big">
              It looks like a space shuttle dashboard but it’s an interface for
              saving a file…
            </figcaption>
          </figure>

          <figure className="fig-design-execution fig-design">
            <img src={images['images/automation-design.png']} alt="Design" />
            <figcaption>Design</figcaption>
          </figure>
          <figure className="fig-design-execution fig-execution">
            <img
              src={images['images/automation-execution.png']}
              alt="Execution"
            />
            <figcaption>Execution</figcaption>
          </figure>

          <p>
            After the first discussion with the team, I came up with the concept
            that was based on how similar tasks (mostly one-direction data flow
            with some logic) are handled in VFX industry: i. e. boxes connected
            with wires.
          </p>

          <div className="feature feature-grey">
            <figure className="gifs">
              <div className="gifs-container">{gifs}</div>
              {/* <figcaption>← Click to play</figcaption> */}
            </figure>
            <figcaption className="big">
              This concept was created in the first two days. We had an XML
              file, and I already had a good reference for the node-based
              systems (SideFX Houdini).
            </figcaption>
          </div>

          <p>
            Some of the decisions were to be revisited, but the concept was
            accepted by both the team and the client.
          </p>

          <div className="feature feature-left-caption">
            <figcaption className="big">
              It looks like a space shuttle dashboard but it’s an interface for
              saving a file…
            </figcaption>
            <figure>
              <video
                controls
                src={videos['videos/automation-fly-concept.mp4']}
                type="video/mp4"
                playsInline
              />
            </figure>
          </div>

          <div className="long-text">
            <p>
              Initial workflow concept was created during the workshops with the
              client and the project team, and was accepted as a high-level
              direction.
            </p>

            <p>
              Currently, the tool allows using decorated Python functions as
              building blocks to perform ETL operations, to run models with
              resulting data, and to save results of the models’ runs.
            </p>
          </div>

          <div className="feature">
            <figure>
              <video
                controls
                src={videos['videos/automation-assets-concept.mp4']}
                type="video/mp4"
                playsInline
              />
            </figure>
            <figcaption className="big">
              It looks like a space shuttle dashboard but it’s an interface for
              saving a file…
            </figcaption>
          </div>

          <p>
            Some of the decisions were to be revisited, but the concept was
            accepted by both the team and the client.
          </p>

          <figure>
            <div className="two-figures">
              <video
                controls
                loop
                src={videos['videos/Lighting-POC-animation.mp4']}
                type="video/mp4"
                playsInline
              />
              <video
                controls
                loop
                src={videos['videos/automation-light.mp4']}
                type="video/mp4"
                playsInline
              />
            </div>
            <figcaption className="big">
              It looks like a space shuttle dashboard but it’s an interface for
              saving a file…
            </figcaption>
          </figure>

          <p>
            Some of the decisions were to be revisited, but the concept was
            accepted by both the team and the client.
          </p>
        </div>
      </section>
    </article>
  );
}
