import { faDribbble, faFacebookF, faLinkedinIn, faInstagram, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo/logo.svg";

const Footer = () => {
  return (
    <footer className='padding-inline footer'>
        <div className="footer-menu">
            <div className="row g-5 align-items-start justify-content-between footer-top">
                <div className="col-xl-2 col-lg-2 col-12">
                    <div className="footer-logo">
                        <img src={logo} alt="logo" width="209px" />
                        {/* <p>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud equip consectetur adipiscing ex ea commodo dolor consequat</p> */}
                    </div>
                </div>

                <div className="col-xl-2 col-lg-3 col-6">
                    <div className="footer-menu-title">
                        <p>contact</p>
                    </div>

                    <div className="d-grid">
                        <a href="tel:+911122334455" className="footer-link">+91 1122 334 455</a>
                        <a href="mailto:contact@khubero.com" className="footer-link">contact@khubero.com</a>
                        <p className="footer-link">Bay Area, California</p>
                    </div>
                </div>

                <div className="col-xl-2 col-lg-2 col-6">
                    <div className="footer-menu-title">
                        <p>company</p>
                    </div>

                    <div className="d-grid">
                        <p className="footer-link">About us</p>
                        <p className="footer-link">Contact us</p>
                        <p className="footer-link">Blog</p>
                        <p className="footer-link">Careers</p>
                        <p className="footer-link">Jobs</p>
                    </div>
                </div>
            </div>

            <div className="footer-separator"></div>

            <div className="row g-3 justify-content-between">
                <div className="col-md-6">
                    <div className="d-flex">
                    <a href='https://www.facebook.com/' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href='https://www.facebook.com/' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href='https://www.facebook.com/' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                        <a href='https://twitter.com/' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>

                        <a href='https://www.linkedin.com/' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>

                        
                    </div>
                </div>
                <div className="col-md-auto copyright ">
                    <p>© 2022-2023, All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer