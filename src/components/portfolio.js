import React, { Component } from 'react';
import _ from 'lodash';
import uuid from 'uuid/v4';
import FilterButton from './filter-button';
import WorkThumbnail from './work-thumbnail';
import data from './data';
import './portfolio.scss';

// Function to import files
function importAll(context) {
  let files = {};
  context.keys().forEach(item => {
    files[item.replace('./', '')] = context(item);
  });
  return files;
}

// Import images
const imageFiles = importAll(
  require.context('../assets/', true, /\.(png|jpe?g|svg)$/)
);

// Import videos
const videoFiles = importAll(
  require.context('../assets/', true, /\.(mp4|mov)$/)
);

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.state = { dataToShow: data, selectedTags: [] };
  }

  handleFilterClick(tag, type) {
    let selectedTags = this.state.selectedTags;

    if (type === 'showAll') {
      if (selectedTags.length === 0) {
        return;
      }
      selectedTags = [];
      this.setState({ selectedTags: [] });
    } else {
      if (this.state.selectedTags.includes(tag)) {
        selectedTags.splice(selectedTags.indexOf(tag), 1);
        this.setState({
          selectedTags: selectedTags
        });
      } else {
        selectedTags.push(tag);
        this.setState({ selectedTags: selectedTags });
      }
    }

    if (this.state.selectedTags.length === 0) {
      this.setState({ dataToShow: data });
    } else {
      this.setState({
        dataToShow: data.filter(element => {
          for (const selectedTag of selectedTags) {
            if (!element.tags.includes(selectedTag)) return false;
          }
          return true;
        })
      });
    }
  }

  render() {
    let works = [];
    let tags = new Set();
    let filterButtons = [];

    // Create thumbnails array
    for (const work of this.state.dataToShow) {
      works.push(
        <WorkThumbnail
          key={uuid()}
          wrapperClass={work.wrapperClass}
          type={work.type}
          file={
            work.type === 'image'
              ? imageFiles[work.file]
              : videoFiles[work.file]
          }
          class={work.class}
          project={work.project}
          clickHandler={this.props.navigator}
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
        clickHandler={this.handleFilterClick}
      />
    );

    //Add the rest of the buttons

    tags.forEach(tag => {
      let counter = 0;
      for (const item of this.state.dataToShow) {
        if (item.tags.includes(tag)) counter++;
      }
      filterButtons.push(
        <FilterButton
          key={uuid()}
          type="filter"
          tag={tag}
          selected={this.state.selectedTags.includes(tag)}
          clickHandler={this.handleFilterClick}
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
}
