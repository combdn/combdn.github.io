import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

// Components
import Filter from './filter';
import WorkThumbnail from './work-thumbnail';
import WorkInfo from './work-info';

import data from '../../components/data';
import useFiles from '../../components/useFiles';

import './gallery.scss';

function Gallery({ dataIdsToShow }) {
  const { images, videos } = useFiles();
  let works = [];
  let tags = new Set();
  const dataToShow = data.filter(work => dataIdsToShow.includes(work.id));

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

  return (
    <div className="works-gallery">
      <h2>Pictures</h2>
      <Filter />
      <div className="grid">{works}</div>
      <WorkInfo />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  dataIdsToShow: state.gallery.dataIdsToShow
});

export default withRouter(connect(mapStateToProps)(Gallery));
