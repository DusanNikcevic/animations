import React, {Component} from "react";
import "./navbarMenu.css";
import {Link} from "react-router-dom";

import {connect} from 'react-redux';

class NavbarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: this.props.menuClass,
      initialLoad: true
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (!this.state.initialLoad) {
      this.setState({navClass: nextProps.menuClass});
    } else if (this.state.initialLoad && nextProps.location !== '/') {
      this.setState({navClass: 'navbarMainNav'})
    }
    this.setState({initialLoad: false})
  }

  render() {
    return (
      <div className={this.state.navClass}>
        <ul>
          <li>
            <Link to="/photo" className='navMenuLink'>
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

function mapStateToProps(state) {
  return {actionType: state.actionType, location: state.location};
}

export default connect(mapStateToProps)(NavbarMenu);
