import React from 'react';
import Background from '../design/home-background.png';

export default function Home() {
  return(
    <div className="section" id="home-section">
      <div className="home-background">
        <div className='image'></div>
      </div>
      <div className="home-title">
        <div className="heading-text">We're here to help</div>
        <div className="normail-text">Let us handle the big problems, so you can focus on what you do best.</div>
      </div>
    </div>
  )
}
