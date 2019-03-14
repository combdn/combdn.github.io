import React, { Component } from 'react';
import data from './data';
import './portfolio.scss';

function importAll(r) {
  let images = {};
  r.keys().forEach(item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('../assets/', true, /\.(png|jpe?g|svg)$/)
);

const videos = importAll(require.context('../assets/', true, /\.(mp4|mov)$/));

export default class Portfolio extends Component {
  render() {
    let works = [];
    for (const work of data) {
      console.log(work.file);
      if (work.type === 'image') {
        works.push(
          <div className={work.wrapperClass + ' wrapper'}>
            <img alt="" className={work.class} src={images[work.file]} />
          </div>
        );
      } else if (work.type === 'video') {
        works.push(
          <div className={work.wrapperClass + ' wrapper'}>
            <video
              autoPlay
              playsInline
              muted={true}
              loop
              className={work.class}
              src={videos[work.file]}
            />
          </div>
        );
      }
    }
    return <div className="grid">{works}</div>;
  }
}
