import React from 'react';
import useFiles from './useFiles';
import Button from './button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './case-pw.scss';

export default function CasePw(props) {
  const { images, videos } = useFiles();
  let jobEditorImages = [
    images['images/PW-deploy-icon.svg'],
    images['images/PW-navigator.svg'],
    images['images/PW-job-editing.png'],
    images['images/PW-nodes-types.png'],
    images['images/PW-properties.png']
  ];

  jobEditorImages = jobEditorImages.map(element => (
    <div>
      <img src={element} />
      <p className="legend">Test</p>
    </div>
  ));
  console.log(jobEditorImages);

  // TODO: add diagram from /Users/combdn/Dropbox/Work/eleks/Aon/Pathwise/Aon-PWOR-workflow-v002.ai
  return (
    <article>
      <h1>Insurance Risk Simulation Applications</h1>
      <div className="goal">
        {/* <EmojiBlock icon="🎯" /> */}
        <div className="case__emoji">
          <span role="img" aria-label="icon">
            🎯
          </span>
        </div>
        <div>
          <span className="first-word">Goal:</span> add two applications to the
          insurance simulation suite. One — to visually build simulation jobs,
          the ohter — to intall and run them.
        </div>
      </div>
      <Carousel>{jobEditorImages}</Carousel>
      <p>
        After the first discussion with the team I came up with the concept that
        was based on how similar tasks (mostly one-direction data flow with some
        logic) was handled in VFX industry: i. e. boxes connected with wires.
      </p>
      <figure>
        <video controls src={videos['videos/PW-concept.mp4']} />
        <figcaption>↑ The first concept</figcaption>
      </figure>
      <p>
        Some of the decisions were to be revisited, but overall concept was
        accepted by both the team and the client.
      </p>
      <p>
        Currently the tool allows to use decorated Python functions as building
        blocks to perform ETL operations, to run models with resulting data and
        to save results. There’s also special trigger node to configure the
        conditions for the job execution start (and also chain them). There are
        also variables that allow to configure the job before running.
      </p>
      <figure>
        <img src={images['images/PW-job-editing.png']} alt="Job editor" />
        <figcaption>↑ Job Editor</figcaption>
      </figure>
      <p>
        The other tool is dedicated to running the created jobs in HPC
        environment. It allows to install, to configure triggers, data sources,
        and variables, and to run the jobs and see their results.
      </p>
      <figure>
        <img src={images['images/PW-signoff.png']} alt="Job running inter" />
        <figcaption>↑ Job orchestrator and debugger</figcaption>
      </figure>
      <p>
        There is also debugging functionality that allows to inspect the job
        execution step by step, and to see all of the intermediate results.
      </p>
    </article>
  );
}
