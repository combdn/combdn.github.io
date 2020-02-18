import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleWorkSelection } from './gallerySlice';

import { ReactComponent as Loader } from '../../assets/images/icons/loader.svg';

import './work-thumbnail.scss';

function WorkThumbnail({
  identificator,
  wrapperClass,
  type,
  file,
  workClass,
  caseId,
  selectedWorkId,
  toggleWorkSelection,
  selectedWorkCaseId,
  title,
  description,
  project
}) {
  const [readyToShow, setReadyToShow] = useState(false);

  let wrapperClasses = '';

  if (readyToShow) {
    wrapperClasses = wrapperClass + ' wrapper';
  } else {
    wrapperClasses = wrapperClass + ' wrapper loading';
  }

  // Manage wrapper classes for the selected
  // and matching to the selected project thumbnails
  if (identificator === selectedWorkId) {
    wrapperClasses = wrapperClass + ' wrapper selected';
  } else if (typeof caseId !== 'undefined' && caseId === selectedWorkCaseId) {
    wrapperClasses = wrapperClass + ' wrapper same-project';
  } else if (
    selectedWorkId !== '' &&
    typeof selectedWorkCaseId !== 'undefined'
  ) {
    wrapperClasses = wrapperClass + ' wrapper not-selected';
  }

  // Loader SVG
  let loader = <Loader />;

  // Info block
  let infoBlock = (
    <div className="info-block">
      <h3>{title}</h3>
      <div className="description">{description}</div>
      <div className="project">{project}</div>
    </div>
  );

  // Return image
  if (type === 'image') {
    return (
      <div
        className={wrapperClasses}
        onClick={() =>
          toggleWorkSelection({ id: identificator, caseId: caseId })
        }
      >
        <div className="loader">{loader}</div>
        <img
          onLoad={() => {
            setReadyToShow(true);
          }}
          alt=""
          className={workClass}
          src={file}
        />
        {infoBlock}
      </div>
    );
  }

  // Return video
  else if (type === 'video') {
    return (
      <div
        className={wrapperClasses}
        onClick={() =>
          toggleWorkSelection({ id: identificator, caseId: caseId })
        }
      >
        <div className="loader">{loader}</div>
        {/* Need this wrapper to apply the shadow to the masked videos
        without affecting the selection frame. */}
        <div className="video-wrapper">
          <video
            // TODO: Check if autoplay is enabled.
            // autoPlay
            onCanPlayThrough={() => {
              setReadyToShow(true);
            }}
            playsInline
            muted={true}
            loop
            className={workClass}
            src={file}
          />
        </div>
        {infoBlock}
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => ({
  selectedWorkId: state.gallery.selectedWorkId,
  selectedWorkCaseId: state.gallery.selectedWorkCaseId
});

const mapDispatchToProps = { toggleWorkSelection };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WorkThumbnail)
);
