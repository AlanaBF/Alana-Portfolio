import React from "react";
import favicon from "../../assets/favicon/apple-touch-icon.png";
import '../../index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Container fluid className='p-0'>
<Navbar expand="navigation navbar lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >
              <div className='logo-container'>
                <div className='logo-text logo-mobile'>
                </div>
                <div className='logo-holder'>
                  <img src={favicon} alt='logo' width="60px" />
                </div>
              </div>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/ProjectGallery'>
                <Nav.Link >Project Gallery</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Freelance">
                <Nav.Link >Freelance Work</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Blog">
                <Nav.Link>Blog</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Contact">
                <Nav.Link>Contact Me</Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
