import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { toggleWorkSelection } from './gallerySlice';

import { Router, Link, navigate } from '@reach/router';
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
  let wrapperClasses = wrapperClass + ' wrapper';

  // Manage wrapper classes for the selected
  // and matching to the selected project thumbnails
  if (identificator === selectedWorkId) {
    wrapperClasses = wrapperClass + ' wrapper selected';
  } else if (typeof caseId !== 'undefined' && caseId === selectedWorkCaseId) {
    wrapperClasses = wrapperClass + ' wrapper same-project';
  }

  // Return image
  if (type === 'image') {
    return (
      <div
        className={wrapperClasses}
        onClick={() =>
          toggleWorkSelection({ id: identificator, caseId: caseId })
        }
      >
        <img alt="" className={workClass} src={file} />
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
        {/* Need this wrapper to apply the shadow to the masked videos
        without affecting the selection frame. */}
        <div className="video-wrapper">
          <video
            // FIXME: enable temporary disabled autoplay
            //autoPlay
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
