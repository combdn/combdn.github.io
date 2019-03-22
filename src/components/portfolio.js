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
    //debugger;
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.state = { dataToShow: data };
  }

  handleFilterClick(tag) {
    // TODO: Implement filter handler
    console.log(tag);
    console.log(this.state.dataToShow);

    // let dataToFilter = _.clone(this.state.dataToShow);
    // dataToFilter.filter(element =>
    //   element.tags.includes(tag)
    // );
    // console.log(dataToFilter);

    this.setState({
      dataToShow: this.state.dataToShow.filter(element =>
        element.tags.includes(tag)
      )
    });
  }

  render() {
    let works = [];
    let tags = new Set();
    let filterButtons = [];

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
        />
      );

      // Add work tags to the global tags set.
      // Duplicates are eliminated by the nature of Set.
      work.tags.forEach(tag => tags.add(tag));
    }

    tags.forEach(tag =>
      filterButtons.push(
        <FilterButton
          key={uuid()}
          tag={tag}
          clickHandler={this.handleFilterClick}
        />
      )
    );

    return (
      <div className="gallery">
        <div className="filter">{filterButtons}</div>
        <div className="grid">{works}</div>
      </div>
    );
  }
}
