import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Layout>
        <Header
          className="header-color"
          transparent
          title="Omega Leo Club"
          style={{ color: "white" }}
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/team">Team</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/team">Team</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
