import React, { Component } from 'react';
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
  render() {
    let works = [];
    for (const work of data) {
      works.push(
        <WorkThumbnail
          wrapperClass={work.wrapperClass}
          type={work.type}
          file={work.type === 'image' ? images[work.file] : videos[work.file]}
          class={work.class}
        />
      );
      // if (work.type === 'image') {
      //   works.push(
      //     <div className={work.wrapperClass + ' wrapper'}>
      //       <img alt="" className={work.class} src={images[work.file]} />
      //     </div>
      //   );
      // } else if (work.type === 'video') {
      //   works.push(
      //     <div className={work.wrapperClass + ' wrapper'}>
      //       <video
      //         autoPlay
      //         playsInline
      //         muted={true}
      //         loop
      //         className={work.class}
      //         src={videos[work.file]}
      //       />
      //     </div>
      //   );
      // }
    }
    return <div className="grid">{works}</div>;
  }
}
