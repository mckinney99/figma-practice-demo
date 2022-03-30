import React from 'react';
import LeftGraphic from '../design/left-graphic.png';
import RightGraphic from '../design/right-graphic.png';

export default function About() {
  return(
    <div className="section" id="about-section">
      <div id="about-title" className="heading-text">About</div>
      <div className="about-sub-sections">
        <div id="about-1">
          <div className="about-sub-img image"></div>
          <div className="about-sub-text normal-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            <p>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <p>nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
        </div>
        <div id="about-2">
          <div className="about-sub-img image"></div>
          <div className="about-sub-text normal-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            <p>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <p>nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
