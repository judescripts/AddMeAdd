import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="nav-container">
          <i className="fas fa-home" />
          <i className="fa fa-dice" />
          <i className="fas fa-sliders-h" />
        </div>
      </div>
    );
  }
}
export default Navbar;
