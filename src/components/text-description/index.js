import React, { Component } from 'react';
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
  }

  onButtonClick() {
    this.setState({
      readMore: !this.state.readMore
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
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))
          : text.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
        {readMore && <Button onClick={this.onButtonClick} />}
      </div>
    );
  }
}
