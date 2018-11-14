import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';

import MainSection from './components/main-section';
import Section from './components/section';

import './App.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
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
          Made with ❤ by Jérémie Zarca
        </StickyFooter>
      </div>
    );
  }
}

export default App;
