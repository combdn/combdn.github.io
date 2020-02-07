import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import FilterButton from './filter-button';
import { toggleTag, showAll } from './gallerySlice';

import data from '../../components/data';

const Filter = ({
  dataIdsToShow,
  availableTags,
  selectedTags,
  toggleTag,
  showAll
}) => {
  let filterButtons = [];
  let showAllActive = false;
  const dataToShow = data.filter(work => dataIdsToShow.includes(work.id));

  // Add "Show All" button. (No tag, different type.)
  selectedTags.length === 0 ? (showAllActive = false) : (showAllActive = true);

  filterButtons.push(
    <FilterButton
      key={uuid()}
      type="showAll"
      tag=""
      clickHandler={showAll}
      active={showAllActive}
    />
  );

  //Add the rest of the buttons
  availableTags.forEach(tag => {
    //Calculate how many works have this tag
    let counter = 0;
    for (const item of dataToShow) {
      if (item.tags.includes(tag)) counter++;
    }

    // Add tags to the buttons array
    filterButtons.push(
      <FilterButton
        key={uuid()}
        type="filter"
        tag={tag}
        selected={selectedTags.indexOf(tag) >= 0}
        clickHandler={() => toggleTag({ tag })}
        counter={counter}
      />
    );
  });
  return <div className="filter">{filterButtons}</div>;
};

const mapStateToProps = (state, ownProps) => ({
  dataIdsToShow: state.gallery.dataIdsToShow,
  availableTags: state.gallery.availableTags,
  selectedTags: state.gallery.selectedTags
});

const mapDispatchToProps = { toggleTag, showAll };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)
);
