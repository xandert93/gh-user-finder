import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, children }) => {
  return (
    <nav
      style={{
        padding: '10px',
        background: 'linear-gradient(90deg, rgb(0, 77, 192), black 60%)',
        opacity: '1',
      }}
      className="navbar"
    >
      <h1 style={{ letterSpacing: '3px', color: 'white', width: '100%' }}>
        <i className={icon} style={{ margin: '0 2%' }}></i>
        {children}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  children: 'GitHub Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
