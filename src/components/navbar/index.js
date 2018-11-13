import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const NavBar = () => (
  <div className="navbar">
    <div>
      <Link to="/">Home</Link>
      <Link to="/hello">Hello</Link>
      <Link to="/counter">Counter</Link>
    </div>
  </div>
);

export default NavBar;