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
        label={'← Home'}
        clickHandler={() => {
          navigate('/');
        }}
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
            The current automation software mostly focuses on controlling
            individual winches that drive various stage machinery: lifting
            trusses, moving theatrical scenery and LED screens, rotating
            platforms, and many others. But when it is required to put together
            a device that can [safely] fly objects or even people on complex
            trajectories, orchestrate complex synchronized movements, you are
            mostly out of luck. (It is possible but very nontrivial, to say the
            least.)
          </p>

          <figure>
            <img
              src={images['images/automation-save-file-on-the-console.png']}
              alt="Saving file on the console"
            />
            <figcaption className="big">
              It may look like a spaceship dashboard, but it’s an interface for
              saving a file…
            </figcaption>
          </figure>
          <p>
            Most of the software and hardware (they are hardware/software
            combinations most of the time) try to use a single interface to
            handle both design and execution. But I’ve found it very limiting:
            sometimes even common operations require jumping through the hoops.
            The idea was to split the interface into two, so you could design on
            a generic PC with a regular keyboard and a mouse, and execute with a
            specialized console with hardware controls.
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
            Since I had little experience with the execution part (we planned to
            catch up on that later with our client), I decided to proceed with
            the design interface. After submerging myself in the field, I’ve
            found that it closely resembles VFX with two differences: everything
            is connected to hardware, and you don’t get to plan an exact timing.
            With that in mind, I came up with several ideas.
          </p>

          <div className="feature feature-grey  feature-left-caption">
            <figcaption className="big">
              Using the DAWs, NLEs, and 3D software as a reference, I came up
              with several ideas to explore the appropriate abstractions.
            </figcaption>
            <figure className="gifs">
              <div className="gifs-container">
                {gifs}
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
            The next step was to prototype some of the ideas. Due to
            similarities to the VFX field, I used Houdini procedural environment
            both as a reference and as a tool for creating some mockups.
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
              The “flight” problem solved in Houdini: you get the cables’
              lengths for driving the object on a given path with a given
              timing.
            </figcaption>
          </div>

          <div className="long-text">
            <p>
              Of course, to cope with rocking and inertia, you need a physical
              simulation, but at that point, I was trying to shift the focus to
              working with the rig as a whole instead of taking care of
              individual winches.
            </p>

            <p>
              The next prototype was to demonstrate the notion of a parametrized
              asset (again an idea from the CAD/Houdini world) — a pre-made
              thing that you could utilize out of the box tweaking its settings
              to fit your task. Since most of the shows use a similar set of
              tricks, having a selection of such assets at hand could solve 90%
              of everyday problems.
            </p>
          </div>

          <div className="feature feature-left-caption">
            <figcaption className="big">
              Tweaking the LED screens asset and setting up the “move.”
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

          <div className="long-text">
            <p>
              The asset is not a black box. You are welcome to dive in and see
              how it works, as well as make changes.
            </p>

            <p>
              Having several ideas about automation, I started thinking about
              lighting. The current situation with lighting consoles is much
              better than the one with automation counterparts, but I was just
              curious to put together some more prototypes made in a procedural
              fashion.
            </p>
          </div>

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
              Both videos demonstrate the concept of objects influencing
              surrounding lights.
            </figcaption>
          </div>

          <p>
            When it came to showing this to industry professionals, some of the
            concepts were taken with a grain of salt. But they were excited by
            the idea of having a single piece of software that could connect the
            video, audio, lights, and automation under one roof and interlink
            them in an adaptive procedural way. (Reusable assets demo was a
            particular success 🙂.)
          </p>
        </div>
      </section>
    </article>
  );
}
