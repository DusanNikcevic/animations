import React, { Component } from "react";
import "./main.css";
import { Switch, Route } from "react-router-dom";

import MainHome from "./mainHome/mainHome";
import MainPhoto from "./mainPhoto/mainPhoto";
import MainVideo from "./mainVideo/mainVideo";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialAnimation: true
    };
  }

  componentDidMount() {
    this.setState({ initialAnimation: false });
  }

  render() {
    return (
      <Switch>
        <div>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <MainHome
                  {...props}
                  animation={this.state.initialAnimation}
                  location="/"
                  getHistory={this.props.getHistory}
                />
              );
            }}
          />
          <Route
            path="/photo"
            render={props => {
              return (
                <MainPhoto
                  {...props}
                  animation={this.state.initialAnimation}
                  location="/photo"
                  getHistory={this.props.getHistory}
                />
              );
            }}
          />
          <Route
            path="/video"
            render={props => {
              return (
                <MainVideo
                  {...props}
                  animation={this.state.initialAnimation}
                  location="/video"
                  getHistory={this.props.getHistory}
                />
              );
            }}
          />
        </div>
      </Switch>
    );
  }
}

export default Main;
