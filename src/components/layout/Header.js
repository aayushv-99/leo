import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import leo from "../../assets/leo.png";

export class Header extends Component {
  render() {
    return (
      <Navbar className="navb" variant="dark">
        <Navbar.Brand href="#home">
          <img className="leo" alt="Leo" src={leo} />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Events</Nav.Link>
          <Nav.Link href="#pricing">Gallery</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
