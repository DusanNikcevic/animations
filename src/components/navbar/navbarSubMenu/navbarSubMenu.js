import React, {Component} from "react";
import "./navbarSubMenu.css";

class NavbarSubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subMenuClass: this.props.subMenuClass
    }
  }
  render() {
    return (
      <div className={this.state.subMenuClass}>
        <ul>
          <li>Option</li>
          <li>Option</li>
          <li>Option</li>
          <li>Option</li>
        </ul>
      </div>
    );
  }
};

export default NavbarSubMenu;
