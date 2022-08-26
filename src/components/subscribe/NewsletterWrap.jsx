
import { faChevronRight, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'

const NewsletterWrap = () => {
  const [userEmail, setUserEmail] = useState();
  const sendEmail = () =>{
    var data = {
      service_id: 'service_af39cmq',
      template_id: 'template_rj2z71l',
      user_id: 'EcL2_iY4UjlQDZPsm',
      template_params: {
          'username': 'raushan10695@gmail.com',
          'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
      }
  };
  
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const isValidEmail =validateEmail(userEmail);

   console.log("isValidEmail", isValidEmail, "userEmail", userEmail);
   return
  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(function() {
      alert('Your mail is sent!');
  }).then(function(error) {
      alert('Oops... ' + JSON.stringify(error));
  });
  }
  return (
    <div className='newsletter-wrap'>
      <div className="input-upper-text d-flex align-items-center justify-content-center">
        <div className="upper-text">
          <FontAwesomeIcon icon={faSquareCheck} />
          <p>BLOG</p>
        </div>
        <div className="upper-text">
          <FontAwesomeIcon icon={faSquareCheck} />
          <p>NEWSLETTER</p>
        </div>

        <div className="upper-text">
          <FontAwesomeIcon icon={faSquareCheck} />
          <p>EVENTS</p>
        </div>

        
      </div>

      <div className="input-wrap">
        <div className="double-button-wrap">
          <div className="newsletter-input">
            <input type="email" className='custom-input' placeholder='email address'  onChange={(e)=>setUserEmail(e.target.value)}/>
            <button className='newsletter-btn' onClick={sendEmail}>Subscribe <FontAwesomeIcon icon={faChevronRight} /></button>
          </div>
          <div className="border-gradient-btn"></div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterWrap