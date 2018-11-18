import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';

import MainSection from './components/main-section';
import Section from './components/section';

import './App.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import NavBar from './components/navbar';

class App extends Component {
  /* constructor() {
    super()
    this.state= {
      scrollTheme: 'white'
    }
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const mainsectionHeight = document.querySelector('.section').clientHeight
    const actualScroll = window.scrollY;

    this.setState({
      scrollTheme: (actualScroll >= (mainsectionHeight - 50)) ? 'black' : 'white'
    })
  }*/

  render() {
    //const { scrollTheme } = this.state
    return (
      <div className="App">
        <NavBar theme="white" elementToWatch=".section" />
        <div className="section">
          <MainSection />
        </div>
        <div>
          <Section />
        </div>
        <StickyFooter
          normalStyles={{
            backgroundColor: '#fff',
            padding: '2rem',
            fontWeight: '200',
            letterSpacing: '1px'
          }}
          stickyStyles={{
            visibility: 'hidden'
          }}
        >
          Made with ❤ by{' '}
          <a
            href="https://twitter.com/Jeremie__"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jérémie Zarca
          </a>
        </StickyFooter>
      </div>
    );
  }
}

export default App;
