import React, { Component } from 'react';

import SearchFullScreen from '../search';

const style = {
  width: '100vw',
  height: '100vh',
  background: `url(https://source.unsplash.com/collection/135653)`,
  backgroundSize: 'cover',
  top: 0,
  left: 0,
  zIndex: -1,
  opacity: 0.8,
  overflow: 'hidden'
};

class MainSection extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div style={style}>
        <SearchFullScreen
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default MainSection;
