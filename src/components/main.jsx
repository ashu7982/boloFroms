

// import enageimg from "../asset/Project-Img/Enagse.png"
import React from 'react';
import otherone from '../images/otherone.png.jpeg';

export default function Important() {
  const componentStyle = {
    backgroundImage: `url(${otherone})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    padding: '20px',
    color: '#fff',
    textAlign: 'center', // Center text within the main div
  };

  const h2Style = {
    color: '#FF69B4', // Hot Pink
  };

  const pStyle = {
    color: '#00BFFF', // Deep Sky Blue
  };

  const h3Style = {
    marginBottom: '20px',
    color: '#32CD32', // Lime Green
  };

  const buttonStyle = {
    backgroundColor: '#FFD700', // Gold
    color: '#000', // Black
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    border: 'none',
  };

  return (
    <div style={componentStyle}>
      <h2 style={h2Style}>Hey, My love</h2>
      <p style={pStyle}>I Love you bht saaraaaaaaa meri jaan hamesha</p>
      <p style={pStyle}>Love you bht jaada wala</p>
      <h3 style={h3Style}>
        This is just a trailor of what I want to make for you.
      </h3>
      {/* <button style={buttonStyle}>Your Button Text</button> */}
    </div>
  );
}
