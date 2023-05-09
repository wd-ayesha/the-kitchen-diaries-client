import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


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
      .then((result) => {
        const registeredUser = result.user;
        console.log(registeredUser);
        setSuccess("Registered Successfully!");
        form.reset();
        setError('');
      })
      .catch((error) => {
        console.log(error.message);
        if (!email || !password) {
          setError("Please enter your email and password");
          return;
        }
        else if (password.length < 6) {
          setError("Password must be at least 6 characters long");
          return;
        }
      });
  };
  return (
    <div className="bg py-5">
      <div className="container py-5">
        <div className="border w-50 m-auto text-center rounded border-0 loginBg py-3">
          <p className="text-danger fs-5">{error}</p>
          <p className="text-success fs-5">{success}</p>
          <form onSubmit={handleRegistration}>
            <input
              className="p-3 w-75 mb-3 bg-transparent rounded"
              type="text"
              name="name"
              placeholder="Enter your Name"
              
            />
            <br />
            <input
              className="p-3 w-75 mb-3 bg-transparent rounded"
              type="email"
              name="email"
              placeholder="Enter your email"
             
            />
            <br />
            <input
              className="p-3 w-75 mb-3 bg-transparent rounded"
              type="password"
              name="password"
              placeholder="Type your password"
            
            />
            <br />
            <input
              className="p-3 w-75 mb-3 bg-transparent rounded"
              type="text"
              name="photo"
              placeholder="Enter your image URL"
            />
            <br />
            <button className="btn btn-outline-danger w-25 p-2">Register</button> <br />
            <p className="p-2">
              <small className="text-secondary">
                Already have an account? Please <Link className="text-white" to="/login">Login</Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
