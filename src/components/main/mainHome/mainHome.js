import React, { Component } from "react";
import "./mainHome.css";
import { Link } from "react-router-dom";

class MainHome extends Component {
  constructor() {
    super();
    let klasa;
  }

  componentDidMount() {
    console.log(this.props.animation);
    console.log(this.props.history.action);
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
        >
          Photo
        </Link>
      </div>
    );
  }
}

export default MainHome;
