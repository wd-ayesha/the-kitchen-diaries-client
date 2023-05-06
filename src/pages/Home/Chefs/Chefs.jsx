import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://the-kitchen-diaries-server-wd-ayesha.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(chefs);
  return (
    <div>
      <Container>
        <h1 className="display-4 pt-4 text-center">Our Chefs</h1>
        <Card className="border-0 py-4">
          <Card.Body>
            <Row>
              {chefs &&
                chefs?.bangladeshi_chefs?.map((chef) => (
                  <Col className="border pt-3 text-center bg-secondary bg-gradient text-white" key={chef?.id} chef={chef} md={6}>
                   <Card.Img className="h-50 w-50 img-thumbnail mb-2" src={chef?.img_url} />
                    <Card.Title>{chef.name}</Card.Title>
                    <Card.Text>
                      <p>Years of experience: {chef.experience_years}</p>
                      <p>Numbers of recipes: {chef.num_recipes}</p>
                      <p>Likes: {chef.likes}</p>
                    </Card.Text>
                    <div className="mb-2">
                      <Link to={`/${chef?.id}`}>
                        <button className="btn btn-outline-danger">View Recipes</button>
                      </Link>
                    </div>
                  </Col>
                ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Chefs;
