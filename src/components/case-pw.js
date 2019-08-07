import React from 'react';
import { detect } from 'detect-browser';
import useFiles from './useFiles';
import Button from './button';
import Footer from './footer';
import './case-pw.scss';

export default function CasePW(props) {
  const browser = detect();
  const { images, videos } = useFiles();
  let iconClass = '';
  if (browser && browser.name === 'safari') {
    iconClass = 'icon-safari';
  } else {
    iconClass = 'icon';
  }

  return (
    <div className="case">
      <Button label={'← Back'} clickHandler={props.navigator} />
      <article>
        <h1>Insurance Risk Simulation Applications</h1>
        <div className="goal">
          <div className={iconClass}>
            <span role="img" aria-label="icon">
              🎯
            </span>
          </div>
          <div>
            <span className="first-word">Goal:</span> add two applications to
            the insurance simulation suite. One — to visually build simulation
            jobs, the ohter — to intall and run them.
          </div>
        </div>
        <p className="copy">
          After the first discussion with the team I came up with the concept
          that was based on how similar tasks (mostly one-direction data flow
          with some logic) was handled in VFX industry: i. e. boxes connected
          with wires.
        </p>
        <video src={videos['videos/PW-concept.mp4']} />
        <p>
          Some of the decisions were to be revisited, but overall concept was
          accepted by both the team and the client.
        </p>
        <p>
          Currently the tool allows to use decorated Python functions as
          building blocks to perform ETL operations, to run models with
          resulting data and to save results. There’s also special trigger node
          to configure the conditions for the job execution start (and also
          chain them). There are also variables that allow to configure the job
          before running.
        </p>
        <img src={images['images/PW-job-editing.png']} alt="Job editor" />
        <p>
          The other tool is dedicated to running the created jobs in HPC
          environment. It allows to install, to configure triggers, data
          sources, and variables, and to run the jobs and see their results.
        </p>
        <img src={images['images/PW-signoff.png']} alt="Job running inter" />
        <p>
          There is also debugging functionality that allows to inspect the job
          execution step by step, and to see all of the intermediate results.
        </p>
      </article>
      <Footer variant={'case'} navigator={props.navigator} />
    </div>
  );
}
