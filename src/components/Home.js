import React from "react";
import Container from "react-bootstrap/Container";
import "./Home.css";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <div className="start-button">Start your campaign</div>
        <div className="spacer" />
        <div className="manage-button">Manage your campaigns</div>
      </Container>
    );
  }
}
export default Home;
