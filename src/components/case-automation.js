import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import { navigate } from '@reach/router';

import useFiles from './useFiles';
import Button from './button';
import AutomationGif from './automation-gif';

import './case.scss';
import './case-automation.scss';

export default function CasePw(props) {
  const { images, videos, texts } = useFiles();
  const [gifsData, setGifsData] = useState([]);
  const [gifsLoaded, setGifsLoaded] = useState(false);

  // Asynchronosely creates the array of objects with gif data.
  // Each object has paths for GIF and PNG, and also
  // fetches the description from the text file with the same name.
  const createGifDataObjects = async () => {
    let gifDataObjects = [];

    // Filter the keys with 'automation-gifs' and '.gif' extension
    let gifKeys = Object.keys(images).filter(
      value =>
        value.indexOf('.gif') >= 0 && value.indexOf('automation-gifs') >= 0
    );

    const getTxtFromFile = async path => {
      let file = await fetch(path);
      return file.text();
    };

    let createGifDataObject = async key => {
      let txtKey = key.replace(/\.gif/, '.txt');
      // Prepare the description
      let description = await getTxtFromFile(texts[txtKey]);

      return {
        className: 'automation-gif',
        gif: images[key],
        png: images[key.replace(/\.gif/, '.png')],
        description: description,
        key: uuid()
        // style: {{ zIndex: `${numberOfPairs - index}` }}
      };
    };

    for (const key of gifKeys) {
      let nextObject = await createGifDataObject(key);
      gifDataObjects.push(nextObject);
    }

    return gifDataObjects;
  };

  // Fetch data once
  useEffect(() => {
    let asyncRun = async () => {
      let dataObjects = await createGifDataObjects();
      setGifsData(dataObjects);
      setGifsLoaded(true);
    };
    asyncRun();
  }, []);

  // Prepare the array of components for the gif gallery.
  let gifs = [];

  if (gifsLoaded) {
    for (const object of gifsData) {
      gifs.push(
        <AutomationGif
          gif={object.gif}
          png={object.png}
          description={object.description}
          className={'automation-gif'}
          // style={object.gif}
          key={uuid()}
        />
      );
    }
  }

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
                <span className="first-word">Goal:</span> Goal: find a new way
                to design and control stage automation rigs.
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
          <p>
            After the first discussion with the team, I came up with the concept
            that was based on how similar tasks (mostly one-direction data flow
            with some logic) are handled in VFX industry: i. e. boxes connected
            with wires.
          </p>

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

          <div className="feature feature-grey  feature-left-caption">
            <figcaption className="big">
              This concept was created in the first two days. We had an XML
              file, and I already had a good reference for the node-based
              systems (SideFX Houdini).
            </figcaption>
            <figure className="gifs">
              <div className="gifs-container">
                {gifs}
                {/* '↑ Click' or '↑ Tap' is chosen based on the media querry. */}
                <figcaption className="figc-gifs-in-grid">
                  <span>
                    ↑ Play any of the demos to see the principle in action.
                    (Visualizations by{' '}
                    <a href="https://www.facebook.com/olegpetro.babii">
                      Oleg-Petro Babii
                    </a>
                    )
                  </span>
                </figcaption>
              </div>
            </figure>
          </div>

          <p>
            Some of the decisions were to be revisited, but the concept was
            accepted by both the team and the client.
          </p>

          <div className="feature ">
            <figure>
              <video
                controls
                src={videos['videos/automation-fly-concept.mp4']}
                poster={images['videos/automation-fly-concept-poster.png']}
                type="video/mp4"
                playsInline
              />
            </figure>
            <figcaption className="big">
              It looks like a space shuttle dashboard but it’s an interface for
              saving a file…
            </figcaption>
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

          <div className="feature feature-left-caption">
            <figcaption className="big">
              It looks like a space shuttle dashboard but it’s an interface for
              saving a file…
            </figcaption>
            <figure>
              <video
                controls
                src={videos['videos/automation-assets-concept.mp4']}
                poster={images['videos/automation-assets-concept-poster.png']}
                type="video/mp4"
                playsInline
              />
            </figure>
          </div>

          <p>
            Some of the decisions were to be revisited, but the concept was
            accepted by both the team and the client.
          </p>

          <div className="two-figures">
            <figure>
              <video
                controls
                loop
                src={videos['videos/Lighting-POC-animation.mp4']}
                poster={images['videos/Lighting-POC-animation-poster.png']}
                type="video/mp4"
                playsInline
              />
            </figure>
            <figure>
              <video
                className="smaller"
                controls
                loop
                src={videos['videos/automation-light.mp4']}
                poster={images['videos/automation-light-poster.png']}
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
        </div>
      </section>
    </article>
  );
}
