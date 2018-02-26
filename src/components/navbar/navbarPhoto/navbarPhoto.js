import React, { Component } from "react";
import "./navbarPhoto.css";

class NavbarAudio extends Component {
  render() {
    return (
      <div>
        <div className="navbarPhotoContent" />
        <img
          src="images/FullLogo.png"
          alt="Logo"
          className="navbarPhotoContent__logo"
        />
        <div className="navbarMainNav">
          <ul>
            <li>Photo</li>
            <li>Video</li>
            <li>Video</li>
            <li>Web</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavbarAudio;
