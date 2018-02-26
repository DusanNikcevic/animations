import React, { Component } from "react";
import "./mainHome.css";
import { Link } from "react-router-dom";

class MainHome extends Component {
  constructor(props) {
    super(props);
    let klasa;
  }

  componentDidMount() {
    return (this.klasa =
      this.props.animation && this.props.history.action === "POP"
        ? "mainContainer initial-animation"
        : "mainContainer");
  }

  render() {
    return (
      <div className={this.klasa}>
        <Link
          to={{ pathname: "/photo", prevPath: this.props.location.pathname }}
          className="link"
        >
          Photo
        </Link>
      </div>
    );
  }
}

export default MainHome;
