import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo/logo.svg";

const Footer = () => {
  return (
    <footer>
        <div className="footer-menu">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-auto col-12">
                    <div className="footer-logo">
                        <img src={logo} alt="logo" width="140px" />
                    </div>
                </div>

                <div className="col-md-6 col-4">
                    {/* <div className="row">
                        <div className="col-md-3 col-12 text-center">
                            <a href="/" className="footer-link">Services</a>
                        </div>

                        <div className="col-md-3 col-12 text-center">
                            <a href="/" className="footer-link">About</a>
                        </div>

                        <div className="col-md-3 col-12 text-center">
                            <a href="/" className="footer-link">Career</a>
                        </div>

                        <div className="col-md-3 col-12 text-center">
                            <a href="/" className="footer-link">Contact</a>
                        </div>
                    </div> */}
                </div>

                <div className="col-md-auto col-8">
                    {/* <a href="mailto:Contact@gfuturetech.com" className="footer-link float-end">
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                        Contact@gfuturetech.com</a> */}
                </div>
            </div>

            <div className="footer-separator"></div>

            <div className="row">
                <div className="col-12 copyright ">
                    <div className="row">
                        <div className="col-auto">
                            <a href="">
                                <p>Copyright © 2022 Khubero. All Rights Reserved.</p>
                            </a>
                        </div>


                    </div>
                </div>

                <div className="col-md-9 col-lg-8">
                    {/* <div className="row justify-content-center">
                        <div className="col-auto">
                            <p><a href="/">Terms & Conditions</a></p>
                        </div>

                        <div className="col-auto">
                            <p><a href="/">Privacy policy</a></p>
                        </div>

                        <div className="col-auto">
                            <p><a href="/">Legal Disclaimer</a></p>
                        </div>

                        <div className="col-auto">
                            <p><a href="/">Cookie Policy</a></p>
                        </div>
                    </div> */}
                </div>

                <div className="col-md-12 col-lg-2 text-right social text-md-center">
                    {/* <div className="d-flex justify-content-end justify-content-md-center">
                        <a href="https://www.facebook.com/gfuturetech/" target="_blank" className="social-wrap">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com/GFTPL_official" target="_blank" className="social-wrap">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.linkedin.com/company/gfuture-tech/" target="_blank" className="social-wrap">
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://gfuturetech.blogspot.com/" target="_blank" className="social-wrap">
                          <FontAwesomeIcon icon={faBlog} />
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer