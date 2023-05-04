import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { registerUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState("");
  
    const handleRegistration = (event) => {
      event.preventDefault();
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        setError("password not valid need 8 char ");
        return;
      }
      if ((name, email, password, image)) {
        registerUser(email, password)
          .then((result) => {
            console.log(result.user);
            
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    }

    return (
        <div>
      <div className="container">
            <div className="border w-50 m-auto text-center my-5 pt-5 bg-danger">
              <p className="text-danger">{error}</p>
              <form action="">
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="email p-3 w-75 mb-3"
                  type="text"
                  placeholder="enter your Name"
                  required
                /> <br />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 w-75 mb-3"
                  type="email"
                  placeholder="enter your email"
                /> <br />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="password p-3 w-75 mb-3"
                    type="text"
                    placeholder="type your password"
                  /> <br />
              <input
              onChange={(e) => setImage(e.target.value)}
                    className="p-3 w-75 mb-3"
                    type="text" name='image' placeholder="type your image URL"
                  /> <br />
                <button
                  onClick={handleRegistration}
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