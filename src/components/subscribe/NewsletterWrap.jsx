
import { faChevronRight, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NewsletterWrap = () => {
  return (
    <div className='newsletter-wrap'>
      <div className="input-upper-text d-flex align-items-center justify-content-center">
        <div className="upper-text">
          <FontAwesomeIcon icon={faSquareCheck} />
          <p>BLOG</p>
        </div>

        <div className="upper-text">
          <FontAwesomeIcon icon={faSquareCheck} />
          <p>EVENTS</p>
        </div>

        <div className="upper-text">
          <FontAwesomeIcon icon={faSquareCheck} />
          <p>NEWSLETTER</p>
        </div>
      </div>

      <div className="input-wrap">
        <div className="double-button-wrap">
          <div className="newsletter-input">
            <input type="email" className='custom-input' placeholder='email address' />
            <button className='newsletter-btn'>Whitepaper <FontAwesomeIcon icon={faChevronRight} /></button>
          </div>
          <div className="border-gradient-btn"></div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterWrap