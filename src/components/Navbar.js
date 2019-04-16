import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="nav-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <i className="fas fa-home" />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <i className="fa fa-dice" />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <i className="fas fa-sliders-h" />
          </Link>
        </div>
      </div>
    );
  }
}
export default Navbar;
