import React from "react";
import Container from "react-bootstrap/Container";
import "./Home.css";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <Container className="controls">
        <div className="start-button">
          <div className="start-contents">
            <i className="far fa-caret-square-right" />
            Start your campaign
          </div>
        </div>
        <div className="spacer" />
        <div className="manage-button">
          <div className="manage-contents">
            <i className="fas fa-clipboard" />
            Manage your campaigns
          </div>
        </div>
      </Container>
    );
  }
}
export default Home;
