import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand
            onClick={scrollToTop}
            style={{
              cursor: "pointer",
              fontWeight: "bolder",
              fontSize: "25px",
            }}
          >
            TsMovies
          </Navbar.Brand>
          <Nav className="me-auto" style={{ marginLeft: "65%" }}>
            <Nav.Link onClick={scrollToTop}>Home</Nav.Link>
            <Nav.Link href="#features">Trending</Nav.Link>
            <Nav.Link href="#pricing">Box Office</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
