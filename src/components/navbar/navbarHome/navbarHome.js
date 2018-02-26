import React, { Component } from "react";
import "./navbarHome.css";
import { Switch, Route } from "react-router-dom";

class NavbarHome extends Component {
  constructor(props) {
    super(props);
    let klasaNavbar;
    let klasaLogo;
    this.state = {
      contentVisible: false,
      firstAnimation: false
    };
    let nMenuClass;
    let nSubMenuClass;
  }

  componentWillMount() {
    this.klasaNavbar =
      this.props.animation && this.props.history.action === "POP"
        ? "navbarHomeContent navbarHomeContent--initialAnimation"
        : "navbarHomeContent navbarHomeContent--repeatingAnimation";
    this.klasaLogo =
      this.props.animation && this.props.history.action === "POP"
        ? "navbarHomeContent__logo navbarHomeContent__logo--initialAnimation"
        : "navbarHomeContent__logo navbarHomeContent__logo--repeatingAnimation";
  }

  render() {
    if (!this.props.animation && !this.props.history.action === "POP") {
      this.nMenuClass = "navbarSubMenuRetracting";
    }
    return (
      <div>
        <div className={this.klasaNavbar} />
        <img src="images/FullLogo.png" alt="Logo" className={this.klasaLogo} />
      </div>
    );
  }
}

export default NavbarHome;
