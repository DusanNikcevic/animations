import React, { Component } from "react";

import "./App.css";

import Navbar from "./navbar/navbar";
import Main from "./main/main";
import Footer from "./footer/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
