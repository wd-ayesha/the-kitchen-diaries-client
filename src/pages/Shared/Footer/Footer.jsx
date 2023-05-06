import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';


const Footer = () => {
    return (

<div className="Container">

  <footer className="text-white text-center text-lg-start bg-dark">
   
    <div className="container p-4">
    
      <div className="row mt-4">
      
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About The Kitchen Diaries</h5>

          <p>
          The Kitchen Diaries is an excellent resource for food recipe companies looking to create delicious, seasonal recipes that are simple, accessible, and flavorful.
          </p>

          <p>
          You can use The Kitchen Diaries as a starting point for creating your own recipe ideas to suit your customers' preferences and dietary requirements.
          </p>

          <p>Additionally, you can also use The Kitchen Diaries as a source of inspiration for creating seasonal menus.</p>

        </div>
       
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

          <div className="form-outline form-white mb-4">
            <input type="text" id="formControlLg" className="form-control form-control-lg" placeholder='Search' />
          </div>

          <ul className="fa-ul" style={{marginRight: '1.5em'}}>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Dhaka, Bangladesh.</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">contact@example.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 48 234 567 88</span>
            </li>
          </ul>
          <div className="mt-4">
     
            <a type="button" className="btn btn-floating btn-light btn-lg me-2"><FaFacebook /></a>

            <a type="button" className="btn btn-floating btn-light btn-lg me-2"><FaGithub /></a>

            <a type="button" className="btn btn-floating btn-light btn-lg"><FaGoogle /></a>
        
          </div>
        </div>
      
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>

          <table className="table text-center text-white">
            <tbody className="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
    
      </div>

    </div>
   
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright:
      <a className="text-white text-decoration-none" href="#"> thekitchendiaries.com</a>
    </div>

  </footer>

</div>

    );
};

export default Footer;