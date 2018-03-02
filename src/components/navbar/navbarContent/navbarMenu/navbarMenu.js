import React, { Component } from "react";
import "./navbarMenu.css";
import { Link } from "react-router-dom";

class NavbarMenu extends Component {
  constructor(props) {
    super(props);
    const activeClassPhoto = "navMenuLinkAudio";
    const activeClassVideo = "navMenuLinkVideo";
    const activeClassAudio = "navMenuLink";
    const activeClassWeb = "navMenuLink";
  }

  componentWillMount() {
    if (this.props.location === "/photo") {
      this.activeClassPhoto = "navMenuLink activeClassPhoto";
    }
  }

  render() {
    return (
      <div className={this.props.menuClass}>
        <ul>
          <li>
            <Link to="/photo" className={this.activeClassPhoto}>
              Photo
            </Link>
          </li>
          <li>
            <Link to="/video" className="navMenuLink">
              Video
            </Link>
          </li>
          <li>
            <Link to="/audio" className="navMenuLink">
              Audio
            </Link>
          </li>
          <li>
            <Link to="/web" className="navMenuLink">
              Web
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarMenu;
