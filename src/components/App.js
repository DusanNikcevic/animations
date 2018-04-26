import React, { Component } from "react";

import "./App.css";

import Navbar from "./navbar/navbar";
import Main from "./main/main";
import Footer from "./footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: null,
      initialAnimation: true
    };
  }

  componentDidMount() {
    this.setState({ initialAnimation: false });
  }

  render() {
    return (
      <div>
        <Navbar
          historyAction={this.state.action}
          initial={this.state.initialAnimation}
        />
        <Main getHistory={this.getHistoryAction} />
        <Footer />
      </div>
    );
  }
}

export default App;
