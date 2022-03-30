import React from 'react';
import MailIcon from '../design/icon_mail.png';
import LocationIcon from '../design/icon_location.png';
import PhoneIcon from '../design/icon_phone.png';

export default function Contact() {
  return(
    <div className="section" id="contact-section">
      <div id="contact-title" className="heading-text">Contact Us</div>
      <div id="contact-sub-sections" className="normal-text">
        <div id="contact-phone">
          <div className="image"></div>
          <p>(666) 876 - 8766</p>
        </div>
        <div id="contact-email">
          <div className="image"></div>
          <p>info@example.com</p>
        </div>
        <div id="contact-location">
          <div className="image"></div>
          <p>444 Nowhere st.</p><br/>
          <p>Land of Oz, MB 98765</p>
        </div>
      </div>
    </div>
  )
}
