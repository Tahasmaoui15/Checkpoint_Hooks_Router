import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MovieCard from "./components/MovieCard";

function App() {
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [movies, setMovies] = useState([]);
  const handleAddMovie = () => {
    setShowAddMovieForm(!showAddMovieForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const movieName = event.target.elements.formMovieName.value;
    const posterURL = event.target.elements.formPosterURL.value;
    const description = event.target.elements.formDescription.value;

    const newMovie = {
      title: movieName,
      posterURL: posterURL,
      description: description,
      rating: 0,
    };

    setMovies([...movies, newMovie]);

    setShowAddMovieForm(false);
  };
  return (
    <div className="App" style={{ backgroundColor: "snow" }}>
      <NavBar />

      <MovieList />
      <button
        onClick={handleAddMovie}
        style={{
          padding: "0.5rem",
          marginTop: "5rem",
          marginLeft: "40%",
          marginBottom: "2rem",
          backgroundColor: "#152238",
          color: "white",
          border: "none",
          borderRadius: "5px",
          width:"20%"
        }}
      >
        + ADD MOVIE
      </button>
      {showAddMovieForm && (
        <Container
          className="mt-4"
          style={{
            position: "fixed",
            top: "1rem",
            left: 0,
            right: 0,
            backgroundColor: "white",
            padding: "20px",
            zIndex: 1000,
            border: "2px solid",
            borderRadius: "5px",
          }}
        >
          <Form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
            <Form.Group className="mb-3" controlId="formMovieName">
              <Form.Label> Movie Name </Form.Label>
              <Form.Control type="text" placeholder="Enter movie name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPosterURL">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control type="text" placeholder="Enter poster URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter movie description"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      )}

      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}

<footer style={{ bottom: 0, width: '100%', backgroundColor: 'lightgray', textAlign: 'right', padding: '1px', color:'white', backgroundColor:'#152238' }}>
  <p>
    &copy; 2024 <b>TsMovies</b>. All rights reserved.
  </p>
</footer>

    </div>
  );
}

export default App;
