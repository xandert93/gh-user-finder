import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, children }) => {
  return (
    <div style={{ padding: '15px' }} className="bg-primary">
      <h1 style={{ letterSpacing: '3px' }}>
        <i className={icon} style={{ margin: '0 20px' }}></i>
        {children}
      </h1>
    </div>
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
