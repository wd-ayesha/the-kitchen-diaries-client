import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    <Container>
      <h1>Our Chefs</h1>

      {/*  {chefs && chefs?.bangladeshi_chefs?.map(chef => (
          <div key={chef?.id}> */}

      <Card>
        <Card.Body>
          <Row>
            {chefs &&
              chefs?.bangladeshi_chefs?.map((chef) => (
                <Col className="border" key={chef?.id} md={3}>
                  <Card.Img src={chef?.img_url} />
                  <Card.Title>{chef.name}</Card.Title>
                  <Card.Text>
                    <p>Years of experience: {chef.experience_years}</p>
                    <p>Numbers of recipes: {chef.num_recipes}</p>
                    <p>Likes: {chef.rating}</p>
                  </Card.Text>
                  <div className="mb-3">
                    <Link to={`/chefs/${chef?.id}`}>
                      <button>View Recipes</button>
                    </Link>
                  </div>
                </Col>
              ))}
          </Row>
        </Card.Body>
      </Card>

      {/* <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
      {/*  <h2>{chef?.name}</h2>
            <p>{chef?.description}</p> */}

      {/*     <ul>
              {service?.items?.map((item) => (
                <li key={item?.id}>
                  {item?.name} - ${item?.price}
                </li>
              ))}
            </ul> */}

      {/*   <p>Duration: {chef?.ratings}</p>
            <Link to={`/services/${chef?.id}`}>
              <button>Details</button>
            </Link> */}
    </Container>

    // ))}
  );
};

export default Chefs;
