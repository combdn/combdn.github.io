import React, { useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import uuid from 'uuid/v4';

import FilterButton from './filter-button';
import WorkThumbnail from './work-thumbnail';
import WorkInfo from './work-info';

import data from './data';
import useFiles from './useFiles';

import './portfolio.scss';

const { images, videos } = useFiles();

export default function Portfolio(props) {
  const [dataToShow, setDataToShow] = useState(data);
  const [selectedTags, setSelectedTags] = useState([]);
  const [projectUnderHover, setProjectUnderHover] = useState();
  const [workInfo, setWorkInfo] = useState({});

  function handleFilterClick(tag, type) {
    let currentSelectedTags = selectedTags;

    if (type === 'showAll') {
      if (currentSelectedTags.length === 0) {
        return;
      }
      currentSelectedTags = [];
      setSelectedTags([]);
    } else {
      if (selectedTags.includes(tag)) {
        currentSelectedTags.splice(currentSelectedTags.indexOf(tag), 1);
        setSelectedTags(currentSelectedTags);
      } else {
        currentSelectedTags.push(tag);
        setSelectedTags(currentSelectedTags);
      }
    }

    if (selectedTags.length === 0) {
      setDataToShow(data);
    } else {
      setDataToShow(
        data.filter(element => {
          for (const selectedTag of currentSelectedTags) {
            if (!element.tags.includes(selectedTag)) return false;
          }
          return true;
        })
      );
    }
  }

  const handleHover = (project, hoverIsOn) => {
    console.log(project + ' hover!');
    hoverIsOn ? setProjectUnderHover(project) : setProjectUnderHover('');
  };

  const handleThumbnailClick = identificator => {
    console.log(identificator);

    let work = data.find(element => element.id === identificator);
    console.log(work);

    setWorkInfo(work.info);
    console.log(work.info);
  };

  let works = [];
  let tags = new Set();
  let filterButtons = [];

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
        class={work.class}
        project={work.project}
        projectUnderHover={projectUnderHover}
        // hoverHandler={handleHover}
        clickHandler={handleThumbnailClick}
      />
    );

    // Add work tags to the global tags set.
    // Duplicates are eliminated by the nature of Set.
    work.tags.forEach(tag => tags.add(tag));
  }

  //Add "Show all" button
  filterButtons.push(
    <FilterButton
      key={uuid()}
      type="showAll"
      tag=""
      clickHandler={handleFilterClick}
    />
  );

  //Add the rest of the buttons
  tags.forEach(tag => {
    let counter = 0;
    for (const item of dataToShow) {
      if (item.tags.includes(tag)) counter++;
    }
    filterButtons.push(
      <FilterButton
        key={uuid()}
        type="filter"
        tag={tag}
        selected={selectedTags.includes(tag)}
        clickHandler={handleFilterClick}
        counter={counter}
      />
    );
  });

  return (
    <div className="gallery">
      <div className="filter">{filterButtons}</div>
      <div className="grid">{works}</div>
      <WorkInfo info={workInfo} />
    </div>
  );
}
