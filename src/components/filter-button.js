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
    let classes = '';
    this.props.selected
      ? (classes = 'filter-button' + ' ' + 'selected')
      : (classes = 'filter-button');

    return (
      <div role="button" className={classes} onClick={this.handleClick}>
        {this.props.tag}
      </div>
    );
  }
}
