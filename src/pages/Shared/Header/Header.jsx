import React, { useContext } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.email);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Navbar sticky="top" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white fw-bold" href="#home">
          The Kitchen Diaries
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="text-decoration-none text-white ms-3" to="/">
              Home
            </NavLink>
            <NavLink
              className="text-decoration-none text-white ms-3 "
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink className="text-decoration-none ms-3">
              <Image
                style={{ height: "40px" }}
                src={user?.photoURL}
                roundedCircle
              />
            </NavLink>

            {user?.email ? (
              <NavLink
                onClick={handleLogout}
                className="text-decoration-none text-white ms-3"
                to="/login"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                className="text-decoration-none text-white ms-3"
                to="/login"
              >
                Login
              </NavLink>
            )}
            <li className="ms-3 text-white">{user?.email}</li>
            <NavLink
              className="text-decoration-none text-white ms-3"
              to="/register"
            >
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
