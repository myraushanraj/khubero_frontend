import logo from "../../assets/img/logo/logo.svg";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false)

  function mobileMenu() {
    setToggle(!toggle);
  }
    return (
      <nav>
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>

        <button type="button" onClick={mobileMenu} className="button_container">
          <svg
            className={
              toggle ? "ham hamRotate ham7 active" : "ham hamRotate ham7"
            }
            viewBox="0 0 100 100"
            width="80"
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
            />
          </svg>
        </button>

        <div className={toggle ? "hamburger_menu open" : "hamburger_menu"}>
          <div className="nav-links">
            <ul>
              <li className="">
                <a href="/">Vision</a>
              </li>
              <li>
                <a href="/">characteristics</a>
              </li>
              <li>
                <a href="/">invest with us</a>
              </li>
              <li>
                <a href="/">tokenomics</a>
              </li>
              <li>
                <a href="/">Roadmap</a>
              </li>
              <li>
                <a href="/">team</a>
              </li>
              <li>
                <a href="/">how to buy</a>
              </li>
              <li>
                <a href="/">branding</a>
              </li>
              <li>
                <a href="/">subcribe</a>
              </li>
            </ul>
          </div>

          <a href="./contact.html" className="nav-btn infinite-text">
            <div className="text-loop">
              <span></span> Let's Connect
            </div>
            <div className="text-loop">
              <span></span> Let's Connect
            </div>
            <div className="text-loop">
              <span></span> Let's Connect
            </div>
            <div className="text-loop">
              <span></span> Let's Connect <span></span>
            </div>
          </a>
        </div>
      </nav>
    );
};

export default Header;
