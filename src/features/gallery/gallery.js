import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Link } from '@reach/router';
import uuid from 'uuid/v4';

// Redux components
import Filter from './filter';
import WorkThumbnail from './work-thumbnail';
import WorkInfo from '../../components/work-info';

import data from '../../components/data';
import useFiles from '../../components/useFiles';

import './gallery.scss';

const { images, videos } = useFiles();

function Gallery({ dataToShow }) {
  const [projectUnderHover, setProjectUnderHover] = useState();
  const [workInfo, setWorkInfo] = useState({});

  const handleHover = (project, hoverIsOn) => {
    console.log(project + ' hover!');
    hoverIsOn ? setProjectUnderHover(project) : setProjectUnderHover('');
  };

  const handleThumbnailClick = identificator => {
    // console.log(data[0].info)
    // debugger;
    let work = data.find(element => element.id === identificator);
    // console.log(data[0].info)
    // console.log(work);
    setWorkInfo({ info: work.info, project: work.project });
    console.log({ info: work.info, project: work.project });
    //console.log(work.info);
  };

  let works = [];
  let tags = new Set();
  let filterButtons = [];

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
        project={work.project}
      />
    );

    // Add work tags to the global tags set.
    // Duplicates are eliminated by the nature of Set.
    work.tags.forEach(tag => tags.add(tag));
  }

  //Add "Show all" button

  console.log({ ...workInfo });
  return (
    <div className="gallery">
      <Filter />
      <div className="grid">{works}</div>
      <WorkInfo {...workInfo} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  dataToShow: state.gallery.dataToShow
});

export default connect(mapStateToProps)(Gallery);
