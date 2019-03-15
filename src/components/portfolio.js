import React, { Component } from 'react';
import FilterButton from './filter-button';
import WorkThumbnail from './work-thumbnail';
import data from './data';
import './portfolio.scss';

// Function to import files
function importAll(r) {
  let images = {};
  r.keys().forEach(item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Import images
const images = importAll(
  require.context('../assets/', true, /\.(png|jpe?g|svg)$/)
);

// Import videos
const videos = importAll(require.context('../assets/', true, /\.(mp4|mov)$/));

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.filter = this.handleFilter.bind(this);
  }

  handleFilter(e) {
    // TODO: Implement filter handler
  }

  render() {
    let works = [];
    let tags = new Set();
    let filterButtons = [];
    //debugger;
    for (const work of data) {
      works.push(
        <WorkThumbnail
          wrapperClass={work.wrapperClass}
          type={work.type}
          file={work.type === 'image' ? images[work.file] : videos[work.file]}
          class={work.class}
        />
      );

      // Add work tags to the global tags set.
      // Duplicates are eliminated by the nature of Set.
      work.tags.forEach(tag => tags.add(tag));
    }

    tags.forEach(tag =>
      filterButtons.push(<FilterButton tag={tag} onClick={this.handleFilter} />)
    );

    return (
      <div className="gallery">
        <div className="filter">{filterButtons}</div>
        <div className="grid">{works}</div>
      </div>
    );
  }
}
