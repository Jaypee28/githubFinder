import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => {

        return (
            <nav className='navbar bg-primary' style={navBarStyle}>
              <h1><i className={icon} /> {title}
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
        )
    
}

const navBarStyle = {
    backgroundColor: '#454241'
}

Navbar.defaultProps = {
    title: "Jaypsu's Github Finder",
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default Navbar
