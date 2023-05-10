import React from "react";
import favicon from "../../assets/favicon/apple-touch-icon.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navigation navbar-expand-lg  justify-content-md-center justify-content-start"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navbar-brand">
            <img src={favicon} alt="logo" width="50px" />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i class="fa-solid fa-bars"></i>
        </Navbar.Toggle>

        <Navbar.Collapse className="navbar-collapse collapse justify-content-between align-items-center w-100">
          <Nav className="me-auto navbar-nav mx-auto text-md-center text-left">
            <LinkContainer to="/">
              <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ProjectGallery">
              <Nav.Link className="nav-link">Project Gallery</Nav.Link>
            </LinkContainer>

            <NavDropdown className="dropdownNav" title="Freelance Work" id="basic-nav-dropdown">
              <LinkContainer to="/freelanceDeveloper">
                <Nav.Link id="web-link">Website Design</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/freelanceTutor">
                <Nav.Link id="maths-link">Maths Tutor</Nav.Link>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/Blog">
              <Nav.Link className="nav-link">Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Games">
              <Nav.Link className="nav-link">Games</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link className="nav-link">Contact Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/CV">
              <Nav.Link className="nav-link">CV</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
            <div className="navIcons">
              <a href="https://twitter.com/AlanaBF81">
                <i className="fa navbarIcons fa-twitter"></i>
              </a>
              <a href="https://github.com/AlanaBF">
                <i className="fa navbarIcons fa-github"></i>
              </a>{" "}
              <a href="https://www.linkedin.com/in/alanabarrettfrew/">
                <i className="fa navbarIcons fa-linkedin"></i>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
