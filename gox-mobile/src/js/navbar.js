import React, { Component } from "react";

import logo from "../../assets/images/logo-name.png";
import '../sass/components/navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar" id="navbar">
            <div className="nav">
              <input type="checkbox" id="nav-check" />
              <div className="nav-header col-8 col-sm-2">
                <img src={logo} className="nav-logo" alt="logo" />
              </div>
              <div className="language col-12 col-sm-3">
                  <button className="lang">ENG</button>
                  <button className="lang">IND</button>
              </div>
              <div className="nav-btn">
                <label htmlFor="nav-check">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
              <div className="nav-links col-sm-7">
                <a href="#nav-products" className="nav-link">
                  PRODUCTS
                </a>
                <a href="#nav-story" className="nav-link">
                  WORLD OF VISION
                </a>
                <a href="#nav-blog" className="nav-link">
                  BLOG
                </a>
                <a href="#nav-about" className="nav-link">
                  ABOUT
                </a>
                <a href="#nav-contact" className="nav-link">
                  CONTACT
                </a>
              </div>
            </div>
      </div>
    );
  }
}

export default Navbar;
