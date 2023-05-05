import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";


const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const { loginUser, googleProvider } = useContext(AuthContext);

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
      })
      .catch((error) => {
        console.log(error.message);
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
  return (
    <div>
      <div className="container">
        <div className="border w-50 m-auto text-center my-5 pt-5 bg-secondary">
          <p className="text-danger"></p>
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
            <button className="btn btn-info w-25 p-2">Login</button> <br />
            <p className="p-2">
              <small className="text-info">
                Don't have an account? Please
                <Link to="/register">Register</Link>
              </small>
            </p>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline-info w-50 p-2 mb-4"
            >
              Login with Google
            </button>
            <button className="btn btn-outline-info w-50 p-2 mb-4 ms-2">
              Login with Github
            </button>
          </form>
          {
            user && <div>
              <h3>User: {user.displayName}</h3>
              <p>Email: {user.email}</p>
              <img src={user.photoURL} alt="" />
            </div>
          }
        </div>
      </div>
    </div>
  );
};
export default Login;
