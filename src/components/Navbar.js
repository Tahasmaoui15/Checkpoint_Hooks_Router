import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">TsMovies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Trending</Nav.Link>
            <Nav.Link href="#pricing">Box Office</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  );
}

export default NavBar;