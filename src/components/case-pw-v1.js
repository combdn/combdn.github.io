import React from 'react';
import useFiles from './useFiles';
import Button from './button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './case-pw-v1.scss';

export default function CasePw(props) {
  const { images, videos } = useFiles();
  console.log(images);

  return (
    <article>
      <section className="intro">
        <div className="section-grid">
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
          <p>
            After the first discussion with the team, I came up with the concept
            that was based on how similar tasks (mostly one-direction data flow
            with some logic) are handled in VFX industry: i. e. boxes connected
            with wires.
          </p>
          <figure style={{ marginBottom: 0 }}>
            <img src={images['images/PW-job-editing.png']} alt="Job editor" />
            <figcaption>Job editor with a real-world example</figcaption>
          </figure>
        </div>
      </section>
      <section className="concept-video">
        <div className="section-grid">
          <figure>
            <video controls src={videos['videos/PW-concept.mp4']} />
            <figcaption>↑ The first concept</figcaption>
          </figure>
          <p className="case-big">
            The concept was created in the first two days. We had an XML file,
            and I already had a good reference for the node-based systems
            (SideFX Houdini).
          </p>
        </div>
      </section>
      <section className="main">
        <div className="section-grid">
          <figure
            className="grid-item"
            style={{ '--col': 'span 4', '--row': 'span 4' }}
          >
            <img src={images['images/PW-properties.png']} alt="Job editor" />
            <figcaption>Job editor with a real-world example.</figcaption>
          </figure>
          <p className="grid-item" style={{ '--col': 'span 8' }}>
            Some of the decisions were to be revisited, but the concept was
            accepted by both the team and the client.
          </p>
          <figure className="grid-item" style={{ '--col': 'span 8' }}>
            <img src={images['images/PW-nodes-types.png']} alt="Node types" />
            <figcaption>All of the node types</figcaption>
          </figure>
          <div className="grid-item" style={{ '--col': 'span 6' }}>
            <p>
              Currently, the tool allows using decorated Python functions as
              building blocks to perform ETL operations, to run models with
              resulting data, and to save results of the models’ runs.
            </p>
            <p>
              The data and execution flows are separated to ensure the exact
              order of the computations and to enable error events handling.
              There’s a special trigger node to configure the conditions for the
              job start (and also chain them), and an exit node to handle the
              various possible outcomes.
            </p>
            <p>
              There are also Data Source and Data Destination node types to work
              with databases and a filesystem.
            </p>
          </div>
          <div className="grid-item ribbon-icons" style={{ '--col': 'span 2' }}>
            <img src={images['images/PW-deploy-icon.svg']} alt="" />
            <img src={images['images/PW-navigator.svg']} alt="" />
            <img src={images['images/PW-edit-task.svg']} alt="" />
            <figcaption>
              ↑ Ribbon icons: Deploy, Navigator, Edit Function
            </figcaption>
          </div>
          <p>
            The other tool is dedicated to running the created jobs in HPC (CUDA
            GPUs) environment. It allows to install, to configure triggers, data
            sources, and variables, and to run the jobs and see their results.
          </p>
          <figure>
            <img src={images['images/PW-signoff.png']} alt="Job orchestrator" />
            <figcaption>↑ Job orchestrator</figcaption>
          </figure>
          <figure>
            <img
              src={images['images/PW-run-details.png']}
              alt="Job run details"
            />
            <figcaption>↑ Job run details</figcaption>
          </figure>
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
