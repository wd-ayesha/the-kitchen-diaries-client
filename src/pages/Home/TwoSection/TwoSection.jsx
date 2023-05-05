import React from "react";
import bgImg from "../../../assets/bg2.jpeg"

const TwoSection = () => {
  return (
    <div>
      <section className="service">
        <div className="card text-bg-dark rounded-0">
          <img
            src={bgImg}
            className="card-img opacity-75 rounded-0"
            alt="..."
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center container ">
            <h2 className="card-title display-4">
              Excellent Services & Good Prices
            </h2>
            <p className="card-text fs-5">
              Here you will dive into a friendly and romantic atmosphere and
              enjoy our haute cuisine. <br /> With our great selection of dishes
              from all over the world you can feel yourself as a traveler and
              true gourmet!
            </p>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="display-4">Subscribe</h2>
        <p className="py-3">
          With our great selection of dishes from all over the world <br /> you
          can feel yourself as a traveler and true gourmet!
        </p>
        <div className="input-group mb-3 w-50 input-btn shadow-lg">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email"
            aria-label="Recipient's email"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-warning text-uppercase"
            type="button"
            id="button-addon2"
          >
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default TwoSection;
