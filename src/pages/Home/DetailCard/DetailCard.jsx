import React, { useState } from "react";
import { Button, Card, Col, Image, Row, Toast } from "react-bootstrap";

const DetailCard = ({ detail }) => {
  const { id, name, ingredients, cooking_method, rating, img } = detail;
  const [favourite, setFavourite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFavourite = () => {
    setFavourite(true);
    setShowToast(true);
  };

  return (
    <div className="container my-5">
      <Row>
        <Col className="xs={8}">
        <Card className="bg-secondary">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Ingredients: </strong>
            <ul>
              {ingredients
                .slice(0, 5)
                .map((ingredient, index) => (
                  <li key={index} className="d-inline">
                    {ingredient + " "}
                  </li>
                ))}
            </ul>
          </Card.Text>
          <Card.Text><strong>Cooking Method: </strong>{cooking_method}</Card.Text>
          <Card.Text>Rating: {rating}</Card.Text>
          <Button
            onClick={handleFavourite}
            variant="primary"
            disabled={favourite}
          >
            Favorite button
          </Button>
        </Card.Body>
      </Card>
        </Col>
        <Col className="xs={4} border p-4 text-center bg-secondary rounded">
        <Image src={img} class="img-thumbnail" alt="Recipe Image" />
        </Col>
      </Row>
      
     
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: "absolute",
          top: 70,
          right: 20,
          zIndex: 1,
        }}
      >
        <Toast.Header>
          <strong className="m-auto">Favourite Food Item!</strong>
        </Toast.Header>
        <Toast.Body>Item added as favorite!</Toast.Body>
      </Toast>
      
    </div>
  );
};

export default DetailCard;
