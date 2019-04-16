import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./Home.css";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <Container className="controls">
        <Link to="/campaign" className="start-button btn btn-secondary">
          <i className="far fa-caret-square-right" />
          Start your campaign
        </Link>
        <div className="spacer" />
        <Link to="/manage" className="manage-button btn btn-secondary">
          <i className="fas fa-clipboard" />
          Manage your campaigns
        </Link>
      </Container>
    );
  }
}
export default Home;
