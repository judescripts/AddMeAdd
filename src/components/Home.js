import React from "react";
import Container from "react-bootstrap/Container";
import "./Home.css";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <Container className="controls">
        <div className="start-button">
          <i className="far fa-caret-square-right" />
          Start your campaign
        </div>
        <div className="spacer" />
        <div className="manage-button">
          <i className="fas fa-clipboard" />
          Manage your campaigns
        </div>
      </Container>
    );
  }
}
export default Home;
