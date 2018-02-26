import React, { Component } from "react";
import "./navbar.css";
import { Switch, Route } from "react-router-dom";

import NavbarHome from "./navbarHome/navbarHome";
import NavbarContent from "./navbarContent/navbarContent";

class Navbar extends Component {
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
        <nav className="navbar">
          <div className="navbarContainer">
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <NavbarHome
                    {...props}
                    animation={this.state.initialAnimation}
                  />
                );
              }}
            />
            <Route path="/photo" component={NavbarContent} />
          </div>
        </nav>
      </Switch>
    );
  }
}

export default Navbar;
