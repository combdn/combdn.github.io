import React, { Component } from 'react';
import './work-thumbnail.scss';

export default class WorkThumbnail extends Component {
  render() {
    if (this.props.type === 'image') {
      return (
        <div className={this.props.wrapperClass + ' wrapper'}>
          <img alt="" className={this.props.class} src={this.props.file} />
        </div>
      );
    } else if (this.props.type === 'video') {
      return (
        <div className={this.props.wrapperClass + ' wrapper'}>
          <video
            // FIXME: enable temporary disabled autoplay
            //autoPlay
            playsInline
            muted={true}
            loop
            className={this.props.class}
            src={this.props.file}
          />
        </div>
      );
    }
  }
}
