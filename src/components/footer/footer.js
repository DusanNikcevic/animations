import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-right">
          <p>Stay Connected</p>
          <i className="fab fa-instagram" />
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-youtube" />
          <i className="fab fa-soundcloud" />
        </div>
        <div className="footer-left">
          <p className="footer-left__copyright">&copy;2018 Penforce Company</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
