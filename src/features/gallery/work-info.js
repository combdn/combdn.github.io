import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import Button from '../../components/button';
import FilterButton from './filter-button';

import './work-info.scss';
import { format } from 'path';

function WorkInfo({ dataToShow, selectedWorkId }) {
  // If object is empty return the empty div
  if (selectedWorkId === '') {
    return <div />;
  }

  let work = dataToShow.find(element => element.id === selectedWorkId);

  const { info, caseId, tags } = work;

  // Return the empty div if there is no info for the work
  if (info === undefined) {
    return <div />;
  }

  const infoTags = [];
  tags.forEach(tag =>
    infoTags.push(
      <FilterButton
        key={uuid()}
        type="infoTag"
        tag={tag}
        // clickHandler={() => toggleTag({ tag })}
      />
    )
  );

  if (caseId === undefined) {
    return (
      <div className="work-info__root">
        <div className="work-info__background">
          <h3 className="title">{info.title}</h3>
          <p className="description">{info.description}</p>
          <p className="project">{info.project}</p>
          <div className="info-tags">{infoTags}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="work-info__root">
      <div className="work-info__background">
        <h3 className="title">{info.title}</h3>
        <p className="description">{info.description}</p>
        <p className="project">{info.project}</p>
        <div className="tags-and-button">
          <Button
            look={'dark'}
            label={'Read the Case'}
            additionalClasses={'case-button'}
            clickHandler={() => navigate('/case/' + caseId)}
          />
          <div className="info-tags">{infoTags}</div>
        </div>
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