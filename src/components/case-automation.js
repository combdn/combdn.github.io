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
  const [gifs, setGifs] = useState([]);

  // // Find the gif keys in automation-gifs/ path.
  // let gifKeys = Object.keys(images).filter(
  //   value => value.indexOf('.gif') >= 0 && value.indexOf('automation-gifs') >= 0
  // );

  // let gifDataObjects = [];

  // const getTxtFromFile = async path => {
  //   let file = await fetch(path);
  //   return file.text();
  // };

  // // Create GIF/PNG/TXT objects
  // // We assume that there are PNG and TXT files with the same name.
  // const getGifDataObjects = () => {
  //   gifKeys.forEach(key => {
  //     let pngKey = key.replace(/\.gif/, '.png');
  //     let txtKey = key.replace(/\.gif/, '.txt');
  //     getTxtFromFile(texts[txtKey]).then(result =>
  //       gifDataObjects.push({
  //         gif: images[key],
  //         png: images[pngKey],
  //         description: result
  //       })
  //     );
  //   });
  // };

  // let numberOfPairs = gifDataObjects.length;

  // gifDataObjects.forEach((dataObject, index) => {
  //   console.log(dataObject.description);
  //   gifs.push(
  //     <AutomationGif
  //       className="automation-gif"
  //       gif={dataObject.gif}
  //       png={dataObject.png}
  //       description={dataObject.description}
  //       key={uuid()}
  //       // style={{ zIndex: `${numberOfPairs - index}` }}
  //     />
  //   );
  // });

  const createGifs = async () => {
    let gifComponents = [];

    let gifKeys = Object.keys(images).filter(
      value =>
        value.indexOf('.gif') >= 0 && value.indexOf('automation-gifs') >= 0
    );

    // debugger;
    const getTxtFromFile = async path => {
      let file = await fetch(path);
      return file.text();
    };

    let createComponent = async key => {
      let txtKey = key.replace(/\.gif/, '.txt');
      let description = await getTxtFromFile(texts[txtKey]);

      return (
        <AutomationGif
          className="automation-gif"
          gif={images[key]}
          png={images[key.replace(/\.gif/, '.png')]}
          description={description}
          key={uuid()}
          // style={{ zIndex: `${numberOfPairs - index}` }}
        />
      );
    };

    gifKeys.forEach(async key =>
      gifComponents.push(await createComponent(key))
    );

    return gifComponents;
  };

  useEffect(() => {
    createGifs().then(
      result => {
        console.log(result);
        setGifs(result);
      },
      [gifs]
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

          <div className="feature feature-grey  feature-left-caption">
            <figcaption className="big">
              This concept was created in the first two days. We had an XML
              file, and I already had a good reference for the node-based
              systems (SideFX Houdini).
            </figcaption>
            <figure className="gifs">
              <div className="gifs-container">{gifs}</div>
              {/* <div className="gifs-container">
                <AutomationGif
                  className="automation-gif"
                  gif={images['images/automation-gifs/01-Ball-And-Door.gif']}
                  png={images['images/automation-gifs/01-Ball-And-Door.png']}
                />
                <AutomationGif
                  className="automation-gif"
                  gif={images['images/automation-gifs/02-Drill-Up.gif']}
                  png={images['images/automation-gifs/02-Drill-Up.png']}
                />
                <AutomationGif
                  className="automation-gif"
                  gif={images['images/automation-gifs/03-Doors.gif']}
                  png={images['images/automation-gifs/03-Doors.png']}
                />
                <AutomationGif
                  className="automation-gif"
                  gif={
                    images['images/automation-gifs/04-Grouping-n-Drilldown.gif']
                  }
                  png={
                    images['images/automation-gifs/04-Grouping-n-Drilldown.png']
                  }
                />
                <AutomationGif
                  className="automation-gif"
                  gif={images['images/automation-gifs/05-Sync.gif']}
                  png={images['images/automation-gifs/05-Sync.png']}
                />
                <AutomationGif
                  className="automation-gif"
                  gif={
                    images[
                      'images/automation-gifs/06-Fixed-And-Floating-Start.gif'
                    ]
                  }
                  png={
                    images[
                      'images/automation-gifs/06-Fixed-And-Floating-Start.png'
                    ]
                  }
                />
                <AutomationGif
                  className="automation-gif"
                  gif={images['images/automation-gifs/07-Speed-Change.gif']}
                  png={images['images/automation-gifs/07-Speed-Change.png']}
                />
                <AutomationGif
                  className="automation-gif"
                  gif={images['images/automation-gifs/08-Mapping-To-Knob.gif']}
                  png={images['images/automation-gifs/08-Mapping-To-Knob.png']}
                />
              </div> */}
              {/* <figcaption>← Click to play</figcaption> */}
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
                type="video/mp4"
                playsInline
              />
            </figure>
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
