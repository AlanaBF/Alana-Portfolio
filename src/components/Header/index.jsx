import React from "react";
import favicon from "../../assets/favicon/apple-touch-icon.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    // <Container fluid className="p-0">
      <Navbar collapseOnSelect expand="lg" className="navbar navigation">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand">
              <div >
                <img src={favicon} alt="logo" width="50px" />
              </div>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link className="nav-link">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ProjectGallery">
                <Nav.Link className="nav-link">Project Gallery</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Freelance">
                <Nav.Link className="nav-link">Freelance Work</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Blog">
                <Nav.Link className="nav-link">Blog</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Contact">
                <Nav.Link className="nav-link">Contact Me</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </Container>
  );
}

export default Header;
