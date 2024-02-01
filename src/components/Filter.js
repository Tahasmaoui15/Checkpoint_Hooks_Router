import React from "react";
import Form from "react-bootstrap/Form";

const Filter = ({ onFilterChange }) => {
  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    onFilterChange(filterValue);
  };

  return (
    <Form
      style={{ marginTop: "5rem", marginLeft: "75rem", marginRight: "3rem" }}
    >
      <Form.Group className="mb-3" controlId="filter">
        <Form.Label style={{ fontWeight: "bolder", marginLeft: "0.5rem" }}>
          Filter by Title / Rating
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Movie Title or Rating (1 to 5)"
          onChange={handleFilterChange}
        />
      </Form.Group>
    </Form>
  );
};

export default Filter;
