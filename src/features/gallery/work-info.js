import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import Button from '../../components/button';
import FilterButton from './filter-button';

import { toggleTag, toggleWorkSelection } from './gallerySlice';

import data from '../../components/data';

import './work-info.scss';
import { format } from 'path';

function WorkInfo({
  dataIdsToShow,
  selectedWorkId,
  toggleTag,
  toggleWorkSelection
}) {
  let history = useHistory();

  // If object is empty return the empty div
  if (selectedWorkId === '') {
    return <div className="work-info__root empty" />;
  }

  const dataToShow = data.filter(work => dataIdsToShow.includes(work.id));

  let work = dataToShow.find(element => element.id === selectedWorkId);

  const { info, caseId, caseReady, tags } = work;

  // Return the empty div if there is no info for the work
  if (info === undefined) {
    return <div className="work-info__root empty" />;
  }

  const infoTags = [];
  tags.forEach(tag =>
    infoTags.push(
      <FilterButton
        key={uuid()}
        type="infoTag"
        tag={tag}
        clickHandler={() => toggleTag({ tag })}
      />
    )
  );

  // Don't include the Read the Case button if there is no caseId
  if (caseId === undefined || caseReady === false) {
    return (
      <div className="work-info__root">
        <div className="work-info__background">
          <Button
            look={'close'}
            clickHandler={() => toggleWorkSelection({ id: selectedWorkId })}
          />
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
        <Button
          look={'close'}
          clickHandler={() => toggleWorkSelection({ id: selectedWorkId })}
        />
        <h3 className="title">{info.title}</h3>
        <p className="description">{info.description}</p>
        <p className="project">{info.project}</p>
        <div className="tags-and-button">
          <Button
            look={'dark'}
            label={'Read the Case'}
            additionalClasses={'case-button'}
            clickHandler={() => history.push('/case/' + caseId)}
          />
          <div className="info-tags">{infoTags}</div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  dataIdsToShow: state.gallery.dataIdsToShow,
  selectedWorkId: state.gallery.selectedWorkId,
  selectedWorkProject: state.gallery.selectedWorkProject
});

const mapDispatchToProps = { toggleTag, toggleWorkSelection };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WorkInfo)
);
