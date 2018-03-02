import React, {Component} from "react";
import "./navbarLogo.css";
import {Link} from "react-router-dom";

import {connect} from 'react-redux';

class NavbarLogo extends Component {
  constructor(props) {
    super(props);
    let klasaNavbar;
    let klasaLogo;
    this.state = {
      firstAnimation: true,
      action: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({action: nextProps.actionType});
    this.klasaNavbar = this.state.firstAnimation && nextProps.actionType === "POP"
      ? "navbarLogoContainer navbarLogoContainer--initialAnimation"
      : "navbarLogoContainer navbarLogoContainer--repeatingAnimation";
    this.klasaLogo = this.state.firstAnimation && nextProps.actionType === "POP"
      ? "navbarLogoContainer__logo navbarLogoContainer__logo--initialAnimation"
      : "navbarLogoContainer__logo navbarLogoContainer__logo--repeatingAnimation";
    this.setState({firstAnimation: false});

    if (nextProps.location !== '/') {
      this.klasaNavbar = 'navbarPhotoContent';
      this.klasaLogo = 'navbarPhotoContent__logo';
    }
  }

  render() {
    return (
      <div>
        <div className={this.klasaNavbar}/>
        <Link to="/" onClick={this.props.removeMainNav}>
          <img src="images/FullLogo.png" alt="Logo" className={this.klasaLogo}/>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props inside of BookList
  return {actionType: state.actionType, location: state.location};
}

export default connect(mapStateToProps)(NavbarLogo);
