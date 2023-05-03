import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpeg'

const Home = () => {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to the Kitchen Diaries</h3>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Try Different Flavor</h3>
            <p>This is a source of inspiration for creating sweet dessart menus.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Enjoy Cooking</h3>
            <p>
            There are different starting recepies for creating your own recipe ideas to suit your customers' preferences and dietary requirements.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Home;