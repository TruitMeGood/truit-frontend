import React from 'react';
import StickyFooter from 'react-sticky-footer';
import { Helmet } from 'react-helmet';

import MainSection from './components/main-section';
import Section from './components/section';
import NavBar from './components/navbar';

import './App.css';
import 'react-placeholder/lib/reactPlaceholder.css';

const App = () => (
  <div className="App">
    <Helmet>
      <title>Truit - Discover beautiful places where you travel</title>
      <meta
        name="og:title"
        content={'Discover beautiful places where you travel'}
      />
      <meta
        name="twitter:title"
        content={'Discover beautiful places where you travel'}
      />
    </Helmet>
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
