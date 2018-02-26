import React, { Component } from "react";
import "./main.css";
import { Switch, Route } from "react-router-dom";

import MainHome from "./mainHome/mainHome";
import MainPhoto from "./mainPhoto/mainPhoto";
import MainVideo from "./mainVideo/mainVideo";

class Main extends Component {
  constructor() {
    super();
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
                <MainHome {...props} animation={this.state.initialAnimation} />
              );
            }}
          />
          <Route path="/photo" component={MainPhoto} />
          <Route path="/video" component={MainVideo} />
        </div>
      </Switch>
    );
  }
}

export default Main;
