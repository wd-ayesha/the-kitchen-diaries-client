import React, { useState } from "react";
import { Button, Card, Toast } from "react-bootstrap";

const DetailCard = ({ detail }) => {
  const { id, name, ingredients, cooking_method, rating } = detail;
  const [favourite, setFavourite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFavourite = () => {
    setFavourite(true);
    setShowToast(true);
  };

  return (
    <div className="container my-5">
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Ingredients: </strong>
            <ul>
              {ingredients
                .slice(0, 5)
                .map((ingredient) => (
                  <li key={ingredient?.index} className="d-inline">
                    {ingredient + " "}
                  </li>
                ))}
            </ul>
          </Card.Text>
          <Card.Text>Cooking Method: {cooking_method}</Card.Text>
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
