
import { faChevronRight, faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'

const NewsletterWrap = () => {
  const [userEmail, setUserEmail] = useState();
  const [checbox, setCheckbox] = useState({
    blog:true,
    news:true,
    event:true
  }),
  sendEmail = () =>{
    var data = {
      service_id: 'service_af39cmq', 
      template_id: 'template_rj2z71l',
      user_id: 'EcL2_iY4UjlQDZPsm',
      template_params: {
          'username': userEmail,
          'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
      }
  };
  
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  if(userEmail){
    const isValidEmail =validateEmail(userEmail);
    if(!isValidEmail){
      alert("Invalid Email Address!");
      return
    }

    // console.log("isValidEmail", isValidEmail, "userEmail", userEmail);
    // return
   fetch('https://api.emailjs.com/api/v1.0/email/send', {
     method: 'POST',
     body: JSON.stringify(data),
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
   }).then(function() {
       alert('Thanks for subscribe!');
   }).then(function(error) {
   });
  }
  else{
    alert("please enter email address");
  }
 
  };
  
  return (
    <div className='newsletter-wrap' id='join'>
      <div className="input-upper-text d-flex align-items-center justify-content-center">
        <div className="upper-text">
          <FontAwesomeIcon icon={checbox.blog ? faSquareCheck : faSquare} onClick = {()=>{setCheckbox({...checbox, blog:!checbox.blog})}}/>
          <p>BLOG</p>
        </div>
        <div className="upper-text">
          <FontAwesomeIcon  icon={checbox.news ? faSquareCheck : faSquare} onClick = {()=>{setCheckbox({...checbox, news:!checbox.news})}}/>
          <p>NEWSLETTER</p>
        </div>

        <div className="upper-text">
          <FontAwesomeIcon  icon={checbox.event ? faSquareCheck : faSquare} onClick = {()=>{setCheckbox({...checbox, event:!checbox.event})}} />
          <p>EVENTS</p>
        </div>

        
      </div>

      <div className="input-wrap">
        <div className="double-button-wrap">
          <div className="newsletter-input">
            <input type="email" className='custom-input' placeholder='email address'  onChange={(e)=>setUserEmail(e.target.value)}/>
            <button className='newsletter-btn' onClick={sendEmail}>Join Wait List <FontAwesomeIcon icon={faChevronRight} /></button>
          </div>
          <div className="border-gradient-btn"></div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterWrap