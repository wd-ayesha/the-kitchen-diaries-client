import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChefDetails from "../../ChefDetails/ChefDetails";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(chefs);
  return (
    <div>
      <Container>
        <h1 className="display-4 pt-4">Our Chefs</h1>
        <Card className="border-0 py-4">
          <Card.Body>
            <Row>
              {chefs &&
                chefs?.bangladeshi_chefs?.map((chef) => (
                  <Col className="border" key={chef?.id} chef={chef} md={6}>
                    <Card.Img src={chef?.img_url} />
                    <Card.Title>{chef.name}</Card.Title>
                    <Card.Text>
                      <p>Years of experience: {chef.experience_years}</p>
                      <p>Numbers of recipes: {chef.num_recipes}</p>
                      <p>Likes: {chef.likes}</p>
                    </Card.Text>
                    <div className="mb-3">
                      <Link to={`/${chef?.id}`}>
                        <button>View Recipes</button>
                      </Link>
                    </div>
                  </Col>
                ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <ChefDetails></ChefDetails>
    </div>
  );
};

export default Chefs;
