import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

// import { useLocation, useHistory, useNavigate } from "react-router";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
 /*  const location = useLocation();
  const history = useHistory();
  let navigate = useNavigate(); */
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
        //   navigate("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div>
      <div className="container">
            <div className="border w-50 m-auto text-center my-5 pt-5 bg-danger">
              <form action="">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 mb-3 w-75"
                  type="email"
                  placeholder="enter your email"
                /> <br />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="password p-3 mb-3 w-75"
                  type="password"
                  placeholder="enter your password"
                /> <br />
                <button
                  onClick={handleLogin}
                  className="btn btn-info w-25 p-2 mt-3"
                >
                  Login
                </button>
                <p className="p-2">
                  <small className="text-info">
                    Are you new on site? Please <Link to='/register'>Register</Link> 
                  </small>
                </p>
              </form>
            </div>
          </div>
        </div>
  );
};

export default Login;