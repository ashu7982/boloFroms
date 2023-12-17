
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heart from '../images/heart.png.jpeg';

export default function Login() {
  const [choc, setChoc] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (
      (choc.toLowerCase() === 'dairymilk' || choc.toLowerCase() === 'dairy milk') &&
      pass === '8383808579'
    ) {
      alert('Congrats, you logged in successfully!');
      navigate('/important');
    } else {
      alert('Wrong credentials. Please try again.');
    }
  };

  const formStyle = {
    backgroundImage: `url(${heart})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '50px',
  };

  const labelStyle = {
    fontSize: '18px',
    color: '#fff',
    marginBottom: '10px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
    marginBottom: '15px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2980b9',
  };

  return (
    <div>
      <form style={formStyle} onSubmit={handleClick}>
        <label style={labelStyle}>Fav. Chocolate</label>
        <input
          type="text"
          placeholder="Your fav. chocolate babes"
          value={choc}
          onChange={(e) => { setChoc(e.target.value) }}
          style={inputStyle}
        />
        <label style={labelStyle}>Password Babes</label>
        <input
          type="password"
          placeholder="Your phone number"
          value={pass}
          onChange={(e) => { setPass(e.target.value) }}
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => { e.target.style = { ...buttonStyle, ...buttonHoverStyle } }}
          onMouseOut={(e) => { e.target.style = buttonStyle }}
        >
          Submit here jaan
        </button>
      </form>
    </div>
  );
}
