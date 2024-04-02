// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {  

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 50px', // Adds horizontal margin
    fontSize: '12'
  };

const containerStyle = {
    width: '1000px', // Set a fixed width for the text container
    margin: '0 auto', // Center the text container horizontally
  };

  return (
    <nav style={{
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        alignItems: 'center',
        padding: '5px',
        backgroundColor: 'darkred', // Using lightcoral for a light maroon color
        //marginLeft: '75px', // This centers the navbar
        //marginRight: '75px', // This centers the navbar
        //width: '1000px', // Set the width to 800px
        //boxSizing: 'border-box', // Ensures padding is included in the width
    }}>
        <div style={containerStyle}> {/* Text container with fixed width */}
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/Sample-Architecture" style={linkStyle}>Sample Architecture</Link>
            <Link to="/Contact" style={linkStyle}>Contact</Link>
        </div>
    </nav>
  );
};

export default Navbar;
