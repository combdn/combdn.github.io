import React from 'react';
import useFiles from './useFiles';
import Button from './button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './case-pw.scss';

export default function CasePw(props) {
  const { images, videos } = useFiles();
  console.log(images);

  // TODO: add the flow diagram

  // TODO: add whiteboards

  return (
    <article>
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
      </section>
      <section className="main">
        <div className="section-grid">
          <p>
            After the first discussion with the team, I came up with the concept
            that was based on how similar tasks (mostly one-direction data flow
            with some logic) are handled in VFX industry: i. e. boxes connected
            with wires.
          </p>

          <div className="concept">
            <figure>
              <video
                className="test"
                controls
                src={videos['videos/PW-concept.mp4']}
              />
              <div className="shadow" />
            </figure>
            <p className="big">
              The concept was created in the first two days. We had an XML file,
              and I already had a good reference for the node-based systems
              (SideFX Houdini).
            </p>
          </div>

          <figure>
            <img src={images['images/PW-workflow.png']} alt="Workflow Conept" />
            <figcaption>
              ↑ Initial workflow concept was created during the workshops with
              the client and the project team, and was accepted as a high level
              direction
            </figcaption>
          </figure>

          <p>
            Some of the decisions were to be revisited, but the concept was
            accepted by both the team and the client.
          </p>

          <figure>
            <img src={images['images/PW-nodes-types.png']} alt="Node types" />
            <figcaption className="big">
              There are also Data Source and Data Destination node types to work
              with databases and a filesystem.
            </figcaption>
          </figure>

          <p>
            Some of the decisions were to be revisited, but the concept was
            accepted by both the team and the client.
          </p>

          <figure className="fig-properties">
            <img
              src={images['images/PW-properties-split.png']}
              alt="Node types"
            />
            <figcaption>
              Properties panel mirroring the i/o structure of the task function.
              Items defined in the function’s decorator are read-only.
            </figcaption>
          </figure>

          <figure className="fig-ribbon-icons">
            <img src={images['images/PW-deploy-icon.svg']} alt="" />
            <img src={images['images/PW-navigator.svg']} alt="" />
            <img src={images['images/PW-edit-task.svg']} alt="" />
            <img src={images['images/PW-add-data-source.svg']} alt="" />
            <img src={images['images/PW-add-new-item.svg']} alt="" />
            <figcaption>
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
            <figcaption>↑ Job orchestrator</figcaption>
          </figure>

          <figure className="fig-run-details">
            <figcaption>↓ Job run details</figcaption>
            <img
              src={images['images/PW-run-details.png']}
              alt="Job run details"
            />
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
