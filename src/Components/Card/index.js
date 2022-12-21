import React from "react";
import { Card, Button, } from "react-bootstrap";

const CardComponent = (props) => {

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title tag="h5">{props.Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" tag="h6">
            {props.Subtitle}
          </Card.Subtitle>
          <Card.Text>
           {props.Text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
