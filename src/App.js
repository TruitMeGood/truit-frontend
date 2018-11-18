import React from 'react';
import StickyFooter from 'react-sticky-footer';

import MainSection from './components/main-section';
import Section from './components/section';
import NavBar from './components/navbar';

import './App.css';
import 'react-placeholder/lib/reactPlaceholder.css';

const App = () => (
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

export default App;
