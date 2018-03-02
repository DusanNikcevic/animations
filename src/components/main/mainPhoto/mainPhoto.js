import React, {Component} from "react";
import "./mainPhoto.css";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionType, location} from './../../../actions/index';

class MainPhoto extends Component {
  constructor(props) {
    super(props);
    let klasa;
  }

  componentDidMount() {
    this
      .props
      .actionType(this.props.history.action);
    this
      .props
      .location(this.props.history.location.pathname);
    return (this.klasa = this.props.animation && this.props.history.action === "POP"
      ? "mainContainer initial-animation"
      : "mainContainer");
  }

  render() {
    return (
      <div className={this.klasa}>
        <Link
          to={{
          pathname: "/",
          prevPath: this.props.location.pathname
        }}
          className="link"
          onClick={() => {
          this
            .props
            .location('/photo')
        }}>
          Home
        </Link>
        <Link
          to={{
          pathname: "/video",
          prevPath: this.props.location.pathname
        }}
          className="link"
          onClick={() => {
          this
            .props
            .location('/video')
        }}>
          Video
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our
  // reducers
  return bindActionCreators({
    actionType: actionType,
    location: location
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(MainPhoto);
