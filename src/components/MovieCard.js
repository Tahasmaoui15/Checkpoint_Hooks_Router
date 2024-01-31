import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "18rem",
          margin: "10px",
          border: "2px solid",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Description: {description} <br />
            Rating: {rating} <br />
          </Card.Text>
          {/* Adding a button to the Cards from ReactBootstrap */}
          <Button> WATCH </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
