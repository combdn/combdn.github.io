import React, { Component } from 'react';
import data from './data';
import './portfolio.scss';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('../assets/', true, /\.(png|jpe?g|svg)$/)
);

export default class Portfolio extends Component {
  render() {
    let works = [];
    for (const work of data) {
      console.log(work.file);
      debugger; //
      works.push(<img alt="" src={images[work.file]} />);
    }
    return (
      <div>
        {works}
        <img alt="" src={images['images/PW-deploy-icon.svg']} />
      </div>
    );
  }
}
