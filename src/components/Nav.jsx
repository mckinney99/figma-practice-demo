import React from 'react';
import Logo from '../design/nav-logo.png';

export default function Nav() {
  return(
    <div id="menubar" className="menu">
      <div className="menu-logo">
        <div className="image"></div>
      </div>
      <div className="nav-item" id="nav-home">
        <a href='#home-section'>Home</a>
      </div>
      <div className="nav-item" id="nav-about">
        <a href='#about-section'>About Us</a>
      </div>
      <div className="nav-item" id="nav-contact">
        <a href='#contact-section'>Contact</a>
      </div>
    </div>
  )
}
