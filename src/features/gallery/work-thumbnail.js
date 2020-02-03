import React, { useState } from 'react';

import { connect } from 'react-redux';
import { toggleWorkSelection } from './gallerySlice';

// import loader from '../../assets/images/icons/loader.svg';

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
  selectedWorkCaseId
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
  let loader = (
    <svg
      width="50"
      height="26"
      viewBox="0 0 50 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        d="M1 25V7C1 3.68629 3.68629 1 7 1V1C10.3137 1 13 3.68629 13 7V19C13 22.3137 15.6863 25 19 25V25C22.3137 25 25 22.3137 25 19V7C25 3.68629 27.6863 1 31 1V1C34.3137 1 37 3.68629 37 7V19C37 22.3137 39.6863 25 43 25V25C46.3137 25 49 22.3137 49 19V1"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
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
            autoPlay
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
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => ({
  selectedWorkId: state.gallery.selectedWorkId,
  selectedWorkCaseId: state.gallery.selectedWorkCaseId
});

const mapDispatchToProps = { toggleWorkSelection };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkThumbnail);
