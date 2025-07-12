import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-dark text-white text-center p-5">
      <h1 className="display-4">Welcome to LapZone</h1>
      <p className="lead">Your One-Stop Shop for Premium Laptops</p>
      <button
        className="btn btn-primary btn-lg mt-3"
        onClick={() => navigate('/pro')}
      >
        Shop Now
      </button>
    </header>
  );
};

export default Header;
