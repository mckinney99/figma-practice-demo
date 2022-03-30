import React from 'react';
import LogoFooter from '../design/logo-footer.png';

export default function Footer() {
  return(
    <div id="footer">
      <div id="logo-footer">
        <div className="image"></div>
        <div id="footer-copyright" className="normal-text">Copyright 2022</div>
      </div>
      <div id="footer-links" className="normal-text">
        <p>Quick Links</p>
        <a href="#home-section">Home</a>
        <a href="#about-section">About</a>
        <a href="#contact-section">Contact</a>
      </div>
    </div>
  )
}
