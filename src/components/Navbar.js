import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleAddMovie = () => {
    setShowAddMovieForm(!showAddMovieForm);
  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand onClick={scrollToTop} style={{cursor:"pointer"}}>TsMovies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={scrollToTop}>Home</Nav.Link>
            <Nav.Link href="#features">Trending</Nav.Link>
            <Nav.Link href="#pricing">Box Office</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleAddMovie} >+ ADD MOVIE</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {showAddMovieForm && (
        <Container className="mt-4" style={{ position: 'fixed', top: '1rem', left: 0, right: 0, backgroundColor: 'white', padding: '20px', zIndex: 1000, border:'2px solid', borderRadius:'5px' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formMovieName">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" placeholder="Enter movie name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPosterURL">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control type="text" placeholder="Enter poster URL" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter movie description" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      )}
    </div>
  );
}

export default NavBar;

