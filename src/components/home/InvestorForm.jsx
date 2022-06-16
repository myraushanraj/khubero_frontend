import React from 'react'

const InvestorForm = () => {
  return (
    <div className="form-wrap">
      <div className="contact-detail">
        <h4>Investor Relations</h4>
        <p>Get in touch for investor related questions</p>
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

        <div className="d-flex align-items-center justify-content-end">
          <button className="btn contact-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default InvestorForm