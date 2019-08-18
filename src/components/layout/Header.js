import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import omega from "../../assets/omega.png";

export class Header extends Component {
  render() {
    return (
      <Navbar className="navb" variant="dark">
        <Navbar.Brand href="#home">
          <img className="leo" alt="Leo" src={omega} />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">
            <h4>Home</h4>
          </Nav.Link>
          <Nav.Link href="#team">
            <h4>Team</h4>
          </Nav.Link>
          <Nav.Link href="#events">
            <h4>Events</h4>
          </Nav.Link>
          <Nav.Link href="#gallery">
            <h4>Gallery</h4>
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
