import React from 'react'
import Upload from './Upload/index';

const FounderForm = () => {
  return (
    <div className="form-wrap">
      <div className="contact-detail">
        <h4>Founders</h4>
        <p>Get in touch and share your pitch deck</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Name" className="custom-input" />
        <input type="email" className="custom-input" placeholder="email" />
        <textarea
          name=""
          id=""
          rows="5"
          className="custom-input"
          placeholder="Your Message"
        ></textarea>


        <div className="d-flex align-items-center justify-content-between">
          <Upload />
          <button className="btn contact-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FounderForm