import "./App.css";
import Logo from "../assets/index.png";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "./Sidebar";
import Home from "./Home";
import Navbar from "./Navbar";
import StartCampaign from "./StartCampaign";
import ManageCampaigns from "./ManageCampaigns";

class App extends React.Component {
  state = {};
  render() {
    return (
      <Row>
        <Router className="main">
          <Col xs={3} md={3} lg={3} className="sidebar">
            <img alt="+ME+" className="logo" src={Logo} />
            <Sidebar />
          </Col>
          <Col xs={9} md={9} lg={9}>
            <Navbar className="navbar" />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/campaign" exact component={StartCampaign} />
              <Route path="/manage" exact component={ManageCampaigns} />
            </Switch>
          </Col>
        </Router>
      </Row>
    );
  }
}
export default App;
