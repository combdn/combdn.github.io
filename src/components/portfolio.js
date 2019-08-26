import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import uuid from 'uuid/v4';
import FilterButton from './filter-button';
import WorkThumbnail from './work-thumbnail';
import data from './data';
import './portfolio.scss';
import useFiles from './useFiles';

const { images, videos } = useFiles();

export default function Portfolio(props) {
  const [dataToShow, setDataToShow] = useState(data);
  const [selectedTags, setSelectedTags] = useState([]);
  let thumbnailWrapperClasses = '';

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

  const handleHover = project => {
    console.log(project + ' hover!');
  };

  let works = [];
  let tags = new Set();
  let filterButtons = [];

  // Create thumbnails array
  for (const work of dataToShow) {
    works.push(
      <WorkThumbnail
        key={uuid()}
        wrapperClass={thumbnailWrapperClasses + ' ' + work.wrapperClass}
        type={work.type}
        file={work.type === 'image' ? images[work.file] : videos[work.file]}
        class={work.class}
        project={work.project}
        hoverHandler={handleHover}
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
    </div>
  );
}
