import React from "react";
import favicon from "../../assets/favicon/apple-touch-icon.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navigation navbar-expand-md bg-light justify-content-md-center justify-content-start"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navbar-brand">
            <img src={favicon} alt="logo" width="50px" />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <button
            className="navbar-toggler ml-1"
            type="button"
            data-toggle="collapse"
            data-target="#collapsingNavbar2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Navbar.Toggle>

        <Navbar.Collapse className="navbar-collapse collapse justify-content-between align-items-center w-100">
          

          <Nav className="me-auto navbar-nav mx-auto text-md-center text-left">
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

          <Nav className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
            <Nav.Link>
              <a href="https://twitter.com/AlanaBF81">
                <i className="fa navbarIcons fa-twitter"></i>
              </a>
            </Nav.Link>
            <Nav.Link>
              <a href="https://github.com/AlanaBF">
                <i className="fa navbarIcons fa-github"></i>
              </a>{" "}
            </Nav.Link>
            <Nav.Link>
              <a href="https://www.linkedin.com/in/alanabarrettfrew">
                <i className="fa navbarIcons fa-linkedin"></i>
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

//     <ul class="navbar-nav mx-auto text-md-center text-left">
//         <li class="nav-item">
//             <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item my-auto">
//             <a class="nav-link navbar-brand mx-0 d-none d-md-inline" href="">Brand</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link" href="#">Link</a>
//         </li>
//     </ul>
//     <ul class="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
//         <li class="nav-item"><a class="nav-link" href=""><i class="fa fa-facebook mr-1"></i></a> </li>
//         <li class="nav-item"><a class="nav-link" href=""><i class="fa fa-twitter"></i></a> </li>
//     </ul>
// </div>
// </nav>
