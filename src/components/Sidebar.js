import React from "react";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";

import City from "../assets/City.png";
import "./Sidebar.css";

class Sidebar extends React.Component {
  state = {};
  render() {
    return (
      <div className="meta-border">
        <Container id="meta-box">
          <p className="content">Currently live from City of Angels!</p>
          <img className="city-img" alt="city" src={City} />
          <h5 className="header">Super Fans</h5>
          <ProgressBar className="progressbar" animated now={60} />
          <div className="meta-goals">
            <span className="left">Goal of 100 fans</span>
            <span className="right">60% joined the base</span>
          </div>
        </Container>
      </div>
    );
  }
}
export default Sidebar;
