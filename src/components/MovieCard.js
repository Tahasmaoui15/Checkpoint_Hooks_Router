import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ title, description, posterURL, rating }) => {
  const handleClick = () => alert(`${title} will be available soon.`);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Card
        style={{
          width: "22rem",
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Card.Img variant="top" src={posterURL} />
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
          <Button onClick={handleClick} style={{ marginTop: "10px" }}>
            {" "}
            WATCH{" "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
