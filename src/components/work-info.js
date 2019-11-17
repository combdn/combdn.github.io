import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';

import './work-info.scss';

function WorkInfo({ dataToShow, selectedWorkId }) {
  // If object is empty return empty div
  if (selectedWorkId === '') {
    return <div />;
  }

  let work = dataToShow.find(element => element.id === selectedWorkId);

  const { info, project, tags } = work;

  if (info === undefined) {
    return <div />;
  }

  return (
    <div className="work-info__root">
      <div className="work-info__background">
        <h3>{info.title}</h3>
        <p>{info.description}</p>
        <p>{project}</p>
        <Link to={'/case/' + project}>Read the Case</Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  dataToShow: state.gallery.dataToShow,
  selectedWorkId: state.gallery.selectedWorkId,
  selectedWorkProject: state.gallery.selectedWorkProject
});

export default connect(mapStateToProps)(WorkInfo);
