import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Chefs.css";

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
                  <Col
                    className="border py-4 text-center chefBg bg-gradient text-white"
                    key={chef?.id}
                    chef={chef}
                    md={6}
                  >
                    <Card.Img
                      className="h-50 w-50 img-thumbnail mb-2 mt-3"
                      src={chef?.img_url}
                      loading="lazy"
                      alt="chef image"
                    />
                    <Card.Title className="fs-2">{chef?.name}</Card.Title>
                    <Card.Text>
                      Years of experience: {chef?.experience_years} <br />
                      Numbers of recipes: {chef?.num_recipes} <br />
                      Likes: {chef?.likes}
                    </Card.Text>
                    <div> 
                      <Link to={`/${chef?.id}`}>
                        <button className="btn btn-outline-danger">
                          View Recipes
                        </button>
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
