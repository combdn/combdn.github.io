import React, { Component } from 'react';
import './filter-button.scss';

export default class FilterButton extends Component {
  render() {
    // TODO: Add counter. It should change as the gallery is being filtered.
    return (
      <div role="button" className="filter-button">
        {this.props.tag}
      </div>
    );
  }
}
