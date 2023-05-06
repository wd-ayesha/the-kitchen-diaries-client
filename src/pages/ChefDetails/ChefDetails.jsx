import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "./../Home/DetailCard/DetailCard";
import { Card } from "react-bootstrap";
import './ChefDEtails.css'

const ChefDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [chefDetails, setChefDetails] = useState({});

  useEffect(() => {
    fetch(`https://the-kitchen-diaries-server-wd-ayesha.vercel.app/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data.item);
        setChefDetails(data.item);
      });
  }, [id]);

  return (
    <>
      <Card className="container pt-5 bg-info">
        <Card.Img
          variant="top"
          className="chef-img" src={chefDetails?.img_url}
        />
        <Card.Body className="">
          <Card.Title className="display-3 text-center"> {chefDetails?.name}</Card.Title>
          <Card.Text className="fs-4">
            <span className="fw-bold">Short Bio/Description: </span>
            {chefDetails?.bio}
          </Card.Text>
          <Card.Text className="fs-4">
          <span className="fw-bold">Likes:</span>
            
            {chefDetails?.likes}
          </Card.Text>
          <Card.Text className="fs-4">
            <span className="fw-bold">Number of recipes: </span>
            {chefDetails?.num_recipes}
          </Card.Text>
          <Card.Text className="fs-4">
          <span className="fw-bold"> Years of experience: </span>
            {chefDetails?.experience_years}
          </Card.Text>
        </Card.Body>
      </Card>
      <div>
        {details?.recipes?.map((detail, index) => (
          <DetailCard key={index} detail={detail}></DetailCard>
        ))}
      </div>
    </>
  );
};

export default ChefDetails;
