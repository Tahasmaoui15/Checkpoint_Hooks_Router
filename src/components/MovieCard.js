import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MovieCard = ({ title, description, posterURL, rating }) => {
    const handleClick= () => alert (`${title} will be available soon.`)
  return (
    <div >
      <Card
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "18rem",
          margin: "10px",
          border: "0.5px solid",
          borderRadius: "8px",
          cursor: "pointer",
          height: "25rem"
        }}
      >
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <b>Description:</b> {description} <br />
            <b>Rating:</b> {rating} <br />
          </Card.Text>
          <Button onClick={handleClick}> WATCH </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;


