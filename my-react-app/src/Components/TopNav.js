import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoPurple from "./images/DGE_LogoIcon_Purple.png";
import Youtube from "./images/Youtube.svg";
import Linkedin from "./images/Linkedin.svg";
// import Behance from "./images/Behance.svg";
import Twitter from "./images/Twitter.svg";
import Instagram from "./images/Instagram.svg";
import Facebook from "./images/Facebook.svg";
// import Github from "./images/Github.svg";

function TopNav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      {/* Social Media Icons */}
      <div className="container-fluid social-media-icons d-flex justify-content-end align-items-center mr-5 pt-3 mb-0 bg-main">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Youtube} className="social-icon" alt="Youtube" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} className="social-icon" alt="LinkedIn" />
        </a>
        {/* <a
          href="https://www.behance.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Behance} className="social-icon" alt="Behance" />
        </a> */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} className="social-icon" alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} className="social-icon" alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} className="social-icon" alt="Facebook" />
        </a>
        {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src={Github} className="social-icon" alt="Github" />
        </a> */}
      </div>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg top-nav p-0">
        <Link className="navbar-brand mx-5" to="/">
          <img src={LogoPurple} alt="Color Logo Icon" className="logo-nav" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} mx-5 navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link mx-5 top-nav-text" to="/builder">
                Builder
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-5 top-nav-text" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-5 top-nav-text" to="/documentation">
                Documentation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-5 top-nav-text" to="/pricing">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default TopNav;
