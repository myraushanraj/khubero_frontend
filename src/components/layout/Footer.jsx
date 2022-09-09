import { faDribbble, faFacebookF, faLinkedinIn, faInstagram, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo/logo.svg";

const Footer = () => {
    console.log("google code")
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
                        <a href="tel:+911122334455" className="footer-link">+971 50 942 4168</a>
                        <a href="mailto:rachna@khubero.com" className="footer-link">rachna@khubero.com</a>
                        <p className="footer-link">Office 10, Level 1, <br/>Sharjah Media City, Sharjah, UAE</p>
                    </div>
                </div>

                <div className="col-xl-2 col-lg-2 col-6">
                    <div className="footer-menu-title">
                        <p>company</p>
                    </div>

                    <div className="d-grid">
                        <p className="footer-link"><a href="#vision">About us</a></p>
                        <p className="footer-link"><a target='_blank' href="https://khuberoofficial.medium.com/">Blog</a></p> 
                        <p className="footer-link"><a target="_blank" href='https://www.linkedin.com/company/khubero/about/'>Careers</a></p>
                        <p className="footer-link"><a target="_blank" href='https://www.linkedin.com/company/khubero/about/'>Jobs</a></p>
                    </div>
                </div>
            </div>

            <div className="footer-separator"></div>

            <div className="row g-3 justify-content-between">
                <div className="col-md-6">
                    <div className="d-flex">
                    <a href='https://www.instagram.com/khuberoofficial/' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100083314075541' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href='https://t.me/khubero' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                        <a href='https://discord.com/channels/999286111211888640/999286111211888643' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>

                        <a href='https://www.linkedin.com/company/khubero/about/' target="_blank" className="social-icon-wrap">
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