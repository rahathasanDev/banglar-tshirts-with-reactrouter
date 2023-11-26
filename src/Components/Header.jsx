import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <nav >
      <Link className='mr-4' to="/">Home</Link>
      <Link className='mr-4' to="/review">OrderReview</Link>
      <Link className='mr-4' to="/about">About</Link>
      <Link className='mr-4' to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Header;