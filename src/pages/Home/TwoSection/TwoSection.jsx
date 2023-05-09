import React from "react";
import bgImg from "../../../assets/bg2.jpeg"
import "./TwoSection.css"

const TwoSection = () => {
  return (
    <div>
      <section className="service">
        <div className="card text-bg-dark rounded-0">
          <img
            src={bgImg}
            className="card-img opacity-75 rounded-0 h-75 img-fluid"
            alt="..."
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center container statBg">
            <h2 className="card-title display-4 pt-2">
            Statistics
            </h2>
            <p className="card-text fs-5 text-center">
              Here you will dive into a friendly and romantic atmosphere and enjoy our haute cuisine. <br /> With our great selection of dishes!
            </p>
            <div class="row text-white d-flex justify-content-evenly pt-3 text-center">
            <div class="col-md-3 border-light-subtle border-4 border stat me-3">
              <h4 class="text-warning pt-5 fw-bolder">123</h4>
              <p class="text-white text-uppercase">outlets</p>
            </div>
            <div class="col-md-3 border-light-subtle border-4 border stat me-3">
              <h4 class="text-warning pt-5 fw-bolder">100</h4>
              <p class="text-white text-uppercase">chefs</p>
            </div>
            <div class="col-md-3 border-light-subtle border-4 border stat me-3">
              <h4 class="text-warning pt-5 fw-bolder">300</h4>
              <p class="text-white text-uppercase">menus</p>
            </div>
            <div class="col-md-3 border-light-subtle border-4 border stat me-3">
              <h4 class="text-warning pt-5 fw-bolder">30</h4>
              <p class="text-white text-uppercase">country</p>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className="container py-5 text-center">
        <h2 className="display-4">Subscribe</h2>
        <p className="py-3">
          With our great selection of dishes from all over the world <br /> you
          can feel yourself as a traveler and true gourmet!
        </p>
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button class="btn btn-secondary" type="button" id="button-addon2">Subscribe</button>
</div>
      </section>
    </div>
  );
};

export default TwoSection;
