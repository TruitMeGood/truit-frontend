import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const NavBar = ({ theme = 'white' }) => (
  <div className={`navbar ${theme}`}>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  </div>
);

export default NavBar;
