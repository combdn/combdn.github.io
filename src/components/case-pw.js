import React from 'react';
import { navigate } from '@reach/router';

import useFiles from './useFiles';
import Button from './button';

import './case-pw.scss';

export default function CasePw() {
  const { images, videos } = useFiles();

  return (
    <article>
      {/* Need to have the button here to establish its stlyle according to the intro's background. */}
      <Button
        label={'← Home'}
        clickHandler={() => {
          navigate('/');
        }}
        look="dark-outline"
      />
      <section className="intro">
        <div className="section-grid">
          <figure style={{ marginBottom: 0 }}>
            <img src={images['images/PW-job-editing.png']} alt="Job editor" />
          </figure>
          <h1>Insurance Risk Simulation Applications</h1>
          <div className="goal">
            {/* <EmojiBlock icon="🎯" /> */}
            <div className="case__emoji">
              <span role="img" aria-label="icon">
                🎯
              </span>
            </div>
            <div>
              <span className="first-word">Goal:</span> add two applications to
              the insurance simulation suite. One — to visually build simulation
              jobs, the other — to install and run them.
            </div>
          </div>
        </div>

        <img
          className="wires-illustration"
          src={images['images/illustrations/wires.svg']}
          alt="Wires"
        />
      </section>

      <section className="main">
        <div className="section-grid">
          <p>
            After the first discussion with the team, I came up with the concept
            that was based on how similar tasks (mostly one-direction data flow
            with some logic) are handled in VFX industry: i. e. boxes connected
            with wires.
          </p>

          <div className="feature feature-grey">
            <figure>
              <video
                controls
                src={videos['videos/PW-concept.mp4']}
                poster={images['videos/PW-concept-poster.png']}
                type="video/mp4"
                playsInline
              />
              <div className="shadow" />
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

          <figure>
            <img src={images['images/PW-workflow.png']} alt="Workflow Conept" />
            <figcaption className="figc-bottom">
              ↑ Initial workflow concept
            </figcaption>
          </figure>

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

          <figure>
            <img src={images['images/PW-nodes-types.png']} alt="Node types" />
            <figcaption className="big">
              Node types: task function, data sources, publisher, notes, exits.
              Input values are visible right away. Variables can be placed to
              inputs by dragging and dropping.
            </figcaption>
          </figure>

          <p>
            The data and execution flows are separated to ensure the exact order
            of the computations and to enable error events handling. There’s a
            special trigger node to configure the conditions for the job start
            (and also chain them), and an exit node to handle the various
            possible outcomes. There are also Data Source and Data Destination
            node types to work with databases and a filesystem.
          </p>

          <figure className="fig-properties">
            <img
              src={images['images/PW-properties-split.png']}
              alt="Node types"
            />
            <figcaption className="figc-bottom">
              ↑ Properties panel mirroring the i/o structure of the task
              function. Items defined in the function’s decorator are read-only.
            </figcaption>
          </figure>

          <figure className="fig-ribbon-icons">
            <img src={images['images/PW-deploy-icon.svg']} alt="" />
            <img src={images['images/PW-navigator.svg']} alt="" />
            <img src={images['images/PW-edit-task.svg']} alt="" />
            <img src={images['images/PW-add-data-source.svg']} alt="" />
            <img src={images['images/PW-add-new-item.svg']} alt="" />
            <figcaption className="figc-bottom">
              ↑ Ribbon icons: Deploy, Navigator, Edit Function, Add Data Source,
              and Add New Item
            </figcaption>
          </figure>

          <p>
            The other tool is dedicated to running the created jobs in HPC (CUDA
            GPUs) environment. It allows to install, to configure triggers, data
            sources, and variables, and to run the jobs and see their results.
          </p>

          <figure className="fig-signoff">
            <img src={images['images/PW-signoff.png']} alt="Job orchestrator" />
            <figcaption className="figc-signoff-small figc-bottom">
              ↑ Job orchestrator features the pivotable table for the job runs,
              the interface for the signoff, and the results viewer
            </figcaption>
          </figure>

          <figcaption className="figc-signoff">
            ← Job orchestrator features the pivotable table for the job runs,
            the interface for the signoff, and the results viewer
          </figcaption>

          <figure className="fig-run-details">
            <img
              src={images['images/PW-run-details.png']}
              alt="Job run details"
            />
            <figcaption className="figc-run-details-small figc-bottom">
              ↑ Job run details show both end results and the state of inputs
              and outputs on each step
            </figcaption>
          </figure>
          <figcaption className="figc-run-details">
            → Job run details show both end results and the state of inputs and
            outputs on each step
          </figcaption>

          <p>
            This tool includes debugging and introspection features that allow
            seeing the journal of execution for any job. Users can review each
            step’s input and output values and track the execution on the graph
            view.
          </p>
        </div>
      </section>
    </article>
  );
}
