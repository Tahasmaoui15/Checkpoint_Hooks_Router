import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const MovieCard = ({ title, description, posterURL, rating }) => {
  const handleClick = () => alert(`${title} will be available soon.`);

  
  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "18rem",
          margin: "10px",
          border: "0.5px solid",
          borderRadius: "8px",
          height: "25rem",
          justifyContent:'space-around',
        }}
      >
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bolder'}}>{title}</Card.Title>
          <Card.Text>
            <b>Description:</b> {description} <br />
            <b>Rating:</b> {rating} <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /> <br />
          </Card.Text>
          <Button onClick={handleClick}> WATCH </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
