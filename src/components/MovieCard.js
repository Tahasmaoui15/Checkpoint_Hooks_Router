import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ title, description, posterURL, rating, trailerURL }) => {
  const handleClick = () => alert(`${title} will be available soon.`);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Card
        style={{
          width: "22rem",
          height:"48rem",
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Card.Img variant="top" src={posterURL} alt={`Poster for ${title}`} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bolder", marginBottom: "10px" }}>
            {title}
          </Card.Title>
          <Card.Text style={{ minHeight: "80px", fontSize: "14px" }}>
            <b>Description:</b> {description} <br />
            <b>Rating:</b> {rating}
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "gold", marginLeft: "5px" }}
            />{" "}
            <br />
          </Card.Text>
          <div style={{ display: "flex", justifyContent: "center", position: "absolute", bottom:5, left: 0, right: 5  }}>
            <Button style={{ fex:1, marginLeft: "5px" }}>
              WATCH TRAILER
            </Button>
            <Button onClick={handleClick} style={{ flex: 1, marginLeft: "5px" }}>
              WATCH MOVIE
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
