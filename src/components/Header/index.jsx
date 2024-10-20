import React from "react";
import favicon from "../../assets/favicon/apple-touch-icon.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../assets/styles/components.css";
import logo from "../../assets/teacherturnsturtle.png";
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navigation navbar-expand-lg  justify-content-md-center justify-content-start"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navbarBrand">
            <img src={favicon} alt="logo" width="50px" />
            <img
              src={logo}
              alt="logo"
              width="70px"
              style={{ padding: "10px" }}
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fa-solid fa-bars"></i>
        </Navbar.Toggle>

        <Navbar.Collapse className="navbar-collapse collapse justify-content-between align-items-center w-100">
          <Nav className="me-auto navbar-nav mx-auto text-md-center text-left">
            <LinkContainer to="/">
              <Nav.Link className="navLink">Home</Nav.Link>
            </LinkContainer>

            {/* Credentials Page */}
            <LinkContainer to="/Credentials">
              <Nav.Link className="navLink">Credentials</Nav.Link>
            </LinkContainer>

            {/* Resources Page */}
            <LinkContainer to="/Resources">
              <Nav.Link className="navLink">Resources</Nav.Link>
            </LinkContainer>

            {/* Project Dropdown */}
            <NavDropdown
              className="dropdownNav"
              title="Projects"
              id="basicNavDropdown"
            >
              <LinkContainer to="/ProfessionalProjects">
                <Nav.Link className="navLink">Professional Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/CollaborativeProjects">
                <Nav.Link className="navLink">
                  Collaborative Group Projects
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ProjectGallery">
                <Nav.Link className="navLink">Personal Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/GamesGallery">
                <Nav.Link className="navLink">Games Projects</Nav.Link>
              </LinkContainer>
            </NavDropdown>
            {/* Fun Page */}
            <LinkContainer to="/Fun">
              <Nav.Link className="navLink">Fun</Nav.Link>
            </LinkContainer>
            {/* Blog */}

            <LinkContainer to="/Blog">
              <Nav.Link className="navLink">Blog Spot</Nav.Link>
            </LinkContainer>

            {/* Contacts and info */}
            <LinkContainer to="/Contact">
              <Nav.Link className="navLink">Contact Me</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
            <div className="navIcons">
              <a
                href="https://github.com/AlanaBF"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa navbarIcons fa-github"></i>
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/alanabarrettfrew/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa navbarIcons fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/teacherturnsturtle81/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <i className="fa navbarIcons fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/teacherturnsturtle"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <i className="fa navbarIcons fa-facebook"></i>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
