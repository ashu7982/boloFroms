

import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const navStyle = {
    background: '#3498db',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    textAlign: 'center',
  };

  const h1Style = {
    fontSize: '28px',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const pStyle = {
    fontSize: '18px',
    marginBottom: '30px',
  };

  const buttonStyle = {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '15px 30px',
    fontSize: '18px',
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  // Media query for smaller screens
  const mediaQueryStyle = {
    h1Style: {
      fontSize: '24px',
    },
    pStyle: {
      fontSize: '16px',
    },
    buttonStyle: {
      padding: '12px 24px',
      fontSize: '16px',
    },
  };

  return (
    <nav style={navStyle}>
      <h1 style={{ ...h1Style, ...mediaQueryStyle.h1Style }}>Hello Miss Most Special Person of my Life</h1>
      <p style={{ ...pStyle, ...mediaQueryStyle.pStyle }}>
        As I said, you're very special to me, so there's no need for you to sign up; you already have direct access to my heart. So, this is nothing, just log in.
      </p>
      <button style={{ ...buttonStyle, ...mediaQueryStyle.buttonStyle }}>
        <Link to={'/login'} style={{ color: '#fff', textDecoration: 'none' }}>
          Login
        </Link>
      </button>
    </nav>
  );
}
