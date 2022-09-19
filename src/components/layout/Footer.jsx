import { faDribbble, faFacebookF, faLinkedinIn, faInstagram, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo/logo.svg";

const Footer = () => {
    console.log("google analytics")
  return (
    <footer className='padding-inline footer'>
        <div className="footer-menu">
            <div className="row g-5 align-items-center justify-content-between footer-top">
                <div className="col-lg-5 col-xl-4 col-12">
                    <div className="footer-logo">
                        <img src={logo} alt="logo" width="209px" />
                        <p className='text-white'>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud equip consectetur adipiscing ex ea commodo dolor consequat</p>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-7 col-12">
                    <div className="footer-about text-lg-end">
                        <p className="footer-about-big-text">We are building the next platform for Investing in Metaverse</p>
                        <p className="footer-about-text">Join Our Discord To Be An Early User</p>

                        <a href="#" className="banner-btn btn">JOIN NOW <FontAwesomeIcon icon={faDiscord} /> </a>
                    </div>
                </div>
            </div>

            {/* <div className="footer-separator"></div> */}

            <div className="row g-3 justify-content-between">
                <div className="col-md-6">
                    <div className="d-flex">
                        <a href='https://www.facebook.com/profile.php?id=100083314075541' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href='https://www.linkedin.com/company/khubero/about/' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href='#' target="_blank" className="social-icon-wrap">
                            <FontAwesomeIcon icon={faDribbble} />
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