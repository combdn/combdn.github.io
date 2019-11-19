import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Link } from '@reach/router';
import uuid from 'uuid/v4';

// Redux components
import Filter from './filter';
import WorkThumbnail from './work-thumbnail';
import WorkInfo from './work-info';

import useFiles from '../../components/useFiles';

import './gallery.scss';

const { images, videos } = useFiles();

function Gallery({ dataToShow }) {
  let works = [];
  let tags = new Set();

  // TODO: add PDF comparison work to the gallery?

  // Create thumbnails array
  for (const work of dataToShow) {
    let thumbnailWrapperClasses = work.wrapperClass;

    works.push(
      <WorkThumbnail
        key={uuid()}
        identificator={work.id}
        wrapperClass={thumbnailWrapperClasses}
        type={work.type}
        file={work.type === 'image' ? images[work.file] : videos[work.file]}
        workClass={work.class}
        caseId={work.caseId}
      />
    );

    // Add work tags to the global tags set.
    // Duplicates are eliminated by the nature of Set.
    work.tags.forEach(tag => tags.add(tag));
  }

  // Add "Show all" button
  return (
    <div className="gallery">
      <Filter />
      <div className="grid">{works}</div>
      <WorkInfo />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  dataToShow: state.gallery.dataToShow
});

export default connect(mapStateToProps)(Gallery);
