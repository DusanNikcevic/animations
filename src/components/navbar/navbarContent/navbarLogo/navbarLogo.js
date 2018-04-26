import React, { Component } from "react";
import "./navbarLogo.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class NavbarLogo extends Component {
  constructor(props) {
    super(props);
    const klasaNavbar = "remove";
    let klasaLogo;
    this.state = {
      firstAnimation: true,
      action: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ action: nextProps.actionType });
    if (nextProps.location === "/") {
      this.klasaNavbar =
        this.state.firstAnimation && nextProps.actionType === "POP"
          ? "navbarLogoContainer navbarLogoContainer--initialAnimation"
          : "navbarLogoContainer navbarLogoContainer--repeatingAnimation";
      this.klasaLogo =
        this.state.firstAnimation && nextProps.actionType === "POP"
          ? "navbarLogoContainer__logo navbarLogoContainer__logo--initialAnimation"
          : "navbarLogoContainer__logo navbarLogoContainer__logo--repeatingAnimation";
      this.setState({ firstAnimation: false });
    }

    if (nextProps.location !== "/") {
      if (this.state.firstAnimation) {
        this.klasaNavbar =
          this.state.firstAnimation && nextProps.actionType === "POP"
            ? "navbarPhotoContent navbarPhotoContent--initial"
            : "navbarLogoContainer navbarLogoContainer--repeatingAnimation";

        this.klasaLogo =
          this.state.firstAnimation && nextProps.actionType === "POP"
            ? "navbarPhotoContent__logo navbarPhotoContent__logo--initial"
            : "navbarLogoContainer__logo navbarLogoContainer__logo--repeatingAnimation";
        this.setState({ firstAnimation: false });
      } else {
        this.klasaNavbar = "navbarPhotoContent navbarPhotoContent--used";
        this.klasaLogo =
          "navbarPhotoContent__logo navbarPhotoContent__logo--used";
      }
    }
  }

  render() {
    return (
      <div>
        <div className={this.klasaNavbar} />
        <Link to="/" onClick={this.props.removeMainNav}>
          <img
            src="images/FullLogo.png"
            alt="Logo"
            className={this.klasaLogo}
          />
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props inside of BookList
  return { actionType: state.actionType, location: state.location };
}

export default connect(mapStateToProps)(NavbarLogo);
