import React, { Component } from 'react';
import './filter-button.scss';

export default class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.clickHandler(this.props.tag);
  }

  render() {
    // TODO: Add counter. It should change as the gallery is being filtered.
    return (
      <div role="button" className="filter-button" onClick={this.handleClick}>
        {this.props.tag}
      </div>
    );
  }
}
