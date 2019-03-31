import React, { Component } from 'react';
import './filter-button.scss';
import { detect } from 'detect-browser';

const browser = detect();
console.log(browser);

export default class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.clickHandler(this.props.tag, this.props.type);
  }

  render() {
    let classes = '';
    let icon = '';

    this.props.selected
      ? (classes = 'filter-button' + ' ' + 'selected')
      : (classes = 'filter-button');

    switch (this.props.tag) {
      case 'beauty':
        icon = '💅🏻';
        break;
      case 'mobile':
        icon = '📱';
        break;
      case 'concept':
        icon = '✏️';
        break;
      case 'data visualization':
        icon = '📈';
        break;
      case 'complex':
        icon = '🧠';
        break;
      case '3d':
        icon = '🎩';
        break;
      case 'lettering':
        icon = '✒️';
        break;
      case 'typography':
        icon = '📰';
        break;

      default:
        icon = '';
        break;
    }

    let iconClass = '';
    if (browser && browser.name === 'safari') {
      iconClass = 'icon-safari';
    } else {
      iconClass = 'icon';
    }

    switch (this.props.type) {
      case 'showAll':
        return (
          <div role="button" className="showAll" onClick={this.handleClick}>
            Show All
          </div>
        );
      default:
        return (
          <div role="button" className={classes} onClick={this.handleClick}>
            <div className="icon-container">
              <div className={iconClass}>
                <span role="img" aria-label="icon">
                  {icon}
                </span>
              </div>
            </div>
            <div className="label">{this.props.tag}</div>
            <div className="counter">{this.props.counter}</div>
          </div>
        );
    }
  }
}
