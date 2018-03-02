import React, {Component} from "react";
import "./navbar.css";
import {Switch, Route} from "react-router-dom";

import NavbarContent from "./navbarContent/navbarContent";
import NavbarSubMenu from "./navbarSubMenu/navbarSubMenu";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbarContainer">
          <NavbarContent
            historyAction={this.props.historyAction}
            initial={this.props.initial}/>
        </div>
      </nav>
    );
  }
}

export default Navbar;
