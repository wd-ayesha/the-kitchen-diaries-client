import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const { loginUser, googleProvider, githubProvider } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        if (email !== password) {
          setError('Invalid email or password');
          return;
        }
      });
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user)
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="border w-50 m-auto text-center my-5 pt-5 bg-info">
          <p className="text-danger">{error}</p>
          <form onSubmit={handleLogin}>
            <input
              className="p-3 w-75 mb-3"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <br />
            <input
              className="p-3 w-75 mb-3"
              type="password"
              name="password"
              placeholder="Type your password"
              required
            />
            <br />
            <button className="btn btn-outline-danger w-25 p-2"><Link className="text-decoration-none">Login</Link></button> <br />
            <p className="p-2">
              <small className="text-dark">
                Don't have an account? Please 
                <Link className="text-decoration-none" to="/register">Register</Link>
              </small>
            </p>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline-danger w-50 p-2 mb-4"
            >
              Login with Google
            </button>
  
            <button onClick={handleGithubSignIn} className="btn btn-outline-danger w-50 p-2 mb-4 ms-2">
              Login with Github
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
