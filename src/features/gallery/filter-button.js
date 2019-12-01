import React, { Component } from 'react';
import './filter-button.scss';
import EmojiBlock from './emoji-block';

export default class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickHandler(this.props.tag, this.props.type);
  }

  render() {
    let classes = '';
    let icon = '';

    this.props.selected
      ? (classes = 'filter-button' + ' ' + 'selected')
      : (classes = 'filter-button');

    switch (this.props.tag) {
      case 'look':
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

    switch (this.props.type) {
      case 'showAll':
        return (
          <div role="button" className="showAll" onClick={this.handleClick}>
            Show All
          </div>
        );
      case 'infoTag':
        //TODO: useEffect(() => window.scrollTo(0, 0)) scroll to top (or show the filter) after clicking the tag. Or disable the tag clicking.
        return (
          <div
            role="button"
            className={classes + ' info-tag'}
            // onClick={this.handleClick}
          >
            <EmojiBlock icon={icon} cssClass="icon" />
            <div className="label">{this.props.tag}</div>
          </div>
        );
      default:
        return (
          <div role="button" className={classes} onClick={this.handleClick}>
            <EmojiBlock icon={icon} cssClass="icon" />
            <div className="label">{this.props.tag}</div>
            <div className="counter">{this.props.counter}</div>
          </div>
        );
    }
  }
}
