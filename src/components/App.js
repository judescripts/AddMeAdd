import "./App.css";
import Logo from "../assets/index.png";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "./Sidebar";
import Home from "./Home";
import Navbar from "./Navbar";
import CampaignForm from "./CampaignForm";

class App extends React.Component {
  state = {};
  render() {
    return (
      <Row>
        <Col xs={3} md={3} lg={3} className="sidebar">
          <img alt="+ME+" className="logo" src={Logo} />
          <Sidebar />
        </Col>
        <Col xs={9} md={9} lg={9}>
          <Navbar className="navbar" />
          <Router className="main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/forms" exact component={CampaignForm} />
            </Switch>
          </Router>
        </Col>
      </Row>
    );
  }
}
export default App;
