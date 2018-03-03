import React, {Component} from "react";
import "./navbarContent.css";

import {connect} from 'react-redux';

import NavbarLogo from "./navbarLogo/navbarLogo";
import NavbarMenu from "./navbarMenu/navbarMenu";
import NavbarSubMenu from './../navbarSubMenu/navbarSubMenu';

class NavbarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navclass: "remove",
      subMenu: 'remove'
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== '/') {
      this.setState({navclass: 'navbarMainNav'})
    } else if (nextProps.location === '/') {
      this.setState({navclass: 'navbarMainNav navbarMainNavHidden removeNav'})
    }
  }

  render() {
    return (
      <div>
        <NavbarLogo
          historyAction={this.props.historyAction}
          removeMainNav={this.removeMainNav}/>
        <NavbarMenu menuClass={this.state.navclass}/>
        <NavbarSubMenu subMenuClass={this.state.subMenu}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {actionType: state.actionType, location: state.location};
}

export default connect(mapStateToProps)(NavbarContent);
