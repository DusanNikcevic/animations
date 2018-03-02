import React, {Component} from "react";
import "./navbarPhoto.css";

import {connect} from 'react-redux';

import NavbarLogo from "./navbarLogo/navbarLogo";
import NavbarMenu from "./navbarMenu/navbarMenu";

class NavbarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navclass: "remove"
    };
    this.removeMainNav = this
      .removeMainNav
      .bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== '/') {
      this.setState({navclass: 'navbarMainNav'})
    } else if (nextProps.location === '/') {
      this.setState({navclass: 'navbarMainNav navbarMainNavHidden removeNav'})
    }
  }

  removeMainNav() {
    this.setState({navclass: 'navbarMainNav removeNav'})
  }

  render() {
    return (
      <div>
        <NavbarLogo
          historyAction={this.props.historyAction}
          removeMainNav={this.removeMainNav}/>
        <NavbarMenu menuClass={this.state.navclass}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props inside of BookList
  return {actionType: state.actionType, location: state.location};
}

export default connect(mapStateToProps)(NavbarContent);
