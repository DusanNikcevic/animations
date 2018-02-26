import React, { Component } from "react";
import "./navbarHome.css";

class NavbarHome extends Component {
  constructor() {
    super();
    let klasaNavbar;
    let klasaLogo;
  }

  componentWillMount() {
    console.log(this.props.animation);
    console.log(this.props.history.action);
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
    console.log(this.klasaNavbar);
    console.log(this.klasaLogo);
    return (
      <div>
        <div className={this.klasaNavbar} />
        <img src="images/FullLogo.png" alt="Logo" className={this.klasaLogo} />
      </div>
    );
  }
}

export default NavbarHome;
