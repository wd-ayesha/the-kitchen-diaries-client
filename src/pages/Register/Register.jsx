 import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { registerUser } = useContext(AuthContext);
    const [success, setSuccess] = useState("");
      const [error, setError] = useState("");


    const handleRegistration = (e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password, photo);

      registerUser(email, password)
      .then(result => {
        const registeredUser = result.user;
        console.log(registeredUser)
        setSuccess('Registered Successfully!')
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message)
      });

    }
    return (
        <div>
      <div className="container">
            <div className="border w-50 m-auto text-center my-5 pt-5 bg-secondary">
              <p className="text-danger fs-5">{error}</p>
              <p className="text-success fs-5">{success}</p>
              <form onSubmit={handleRegistration}>
                <input
                  
                  className="p-3 w-75 mb-3"
                  type="text" name='name'
                  placeholder="Enter your Name"
                  required
                /> <br />
                <input
                  
                  className="p-3 w-75 mb-3"
                  type="email" name='email'
                  placeholder="Enter your email" required
                /> <br />
                  <input
                   
                    className="p-3 w-75 mb-3"
                    type="password" name='password'
                    placeholder="Type your password" required
                  /> <br />
              <input
            
                    className="p-3 w-75 mb-3"
                    type="text" name='photo' placeholder="Enter your image URL"
                  /> <br />
                <button
    
                  className="btn btn-info w-25 p-2"
                >
                  Register
                </button> <br />
                <p className="p-2">
                  <small className="text-info">
                    Already have an account? Please <Link to='/login'>Login</Link>
                  </small>
                </p>
              </form>
            </div>
          </div>
        </div>
    );
};
export default Register;
/* import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
  };
  return (
    <Container className="w-50 mx-auto">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already have an account? Please <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
 */