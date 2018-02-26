import React, { Component } from "react";
import "./mainPhoto.css";
import { Link } from "react-router-dom";

class MainPhoto extends Component {
  render() {
    console.log(this.props.location.prevPath);
    return (
      <div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default MainPhoto;
