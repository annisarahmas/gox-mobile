import React, { Component } from "react";
import '../sass/components/footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer row">
        <div className="col-12 col-md-1">
          <div className="logo">
            <img src="../assets/images/logo.png" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="navbar_list">
              <a href="#">PRODUCTS</a>
              <a href="#">WORLD OF VISION</a>
              <a href="#">BLOG</a>
              <a href="#">ABOUT</a>
              <a href="#">CONTACT</a>
          </div>
        </div>
        <div className="col-12 col-md-5">
            <p className="copyright">© 2017 PT. Cahyadi Perkasa Corporindo. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
