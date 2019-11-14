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
  project,
  selectedWorkId,
  toggleWorkSelection
}) {
  const [wrapperClasses, setWrapperClasses] = useState(
    wrapperClass + ' wrapper'
  );

  // Return image
  if (type === 'image') {
    return (
      <div
        className={wrapperClasses}
        onClick={() => toggleWorkSelection({ id: identificator })}
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
        onClick={() => toggleWorkSelection({ id: identificator })}
      >
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
    );
  }
}

const mapStateToProps = (state, ownprops) => ({
  selectedWorkId: state.gallery.selectedWorkId
});

const mapDispatchToProps = { toggleWorkSelection };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkThumbnail);
