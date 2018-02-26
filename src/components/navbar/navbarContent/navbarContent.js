import React, { Component } from "react";
import "./navbarPhoto.css";
import { Link } from "react-router-dom";

import NavbarMenu from "./../navbarMenu/navbarMenu";
import NavbarSubMenu from "./../navbarSubMenu/navbarSubMenu";

class NavbarContent extends Component {
  constructor(props) {
    super(props);
    this.state = { navclass: "navbarMainNav" };
  }

  render() {
    return (
      <div>
        <div className="navbarPhotoContent" />
        <img
          src="images/FullLogo.png"
          alt="Logo"
          className="navbarPhotoContent__logo"
        />
        <NavbarMenu
          menuClass={this.state.navclass}
          location={this.props.location.pathname}
        />
        <NavbarSubMenu />
      </div>
    );
  }
}

export default NavbarContent;
