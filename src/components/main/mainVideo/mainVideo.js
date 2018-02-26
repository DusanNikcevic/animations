import React, { Component } from "react";
import "./mainVideo.css";
import { Link } from "react-router-dom";

class MainVideo extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/photo">Photo</Link>
      </div>
    );
  }
}

export default MainVideo;
