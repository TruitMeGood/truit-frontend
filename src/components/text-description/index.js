import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

import './style.css';

const Button = ({ onClick }) => (
  <div className="text-button">
    <button onClick={onClick}>Read more</button>
  </div>
);

export default class TextDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: true
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.sanitizeText = this.sanitizeText.bind(this);
  }

  onButtonClick() {
    this.setState({
      readMore: !this.state.readMore
    });
  }

  sanitizeText(text) {
    return ReactHtmlParser(text, {
      transform: function(node) {
        if (node.type === 'tag' && node.name === 'a') {
          return node.children[0].data;
        }
      }
    });
  }

  render() {
    const { text } = this.props;
    const { readMore } = this.state;
    return (
      <div className="text-description">
        {readMore
          ? text
              .slice(0, 1)
              .map((paragraph, index) => (
                <p key={index}>{this.sanitizeText(paragraph)}</p>
              ))
          : text.map((paragraph, index) => (
              <p key={index}>{this.sanitizeText(paragraph)}</p>
            ))}
        {readMore && <Button onClick={this.onButtonClick} />}
      </div>
    );
  }
}
