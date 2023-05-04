import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.email)
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
        <Navbar.Brand className='text-white fw-bold' href="#home">The Kitchen Diaries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='text-decoration-none text-black ms-3 text-white' to="/">Home</Link>
            <Link className='text-decoration-none text-black ms-3 text-white' to="/blog">Blog</Link>
            <Link className='text-decoration-none text-black ms-3'><Image src={user?.img_url} roundedCircle /></Link>
            {/* <Link className='text-decoration-none text-black ms-3 text-white' to="/login">Login</Link> */}

            {user?.email ? (
         
           <Link onClick={handleLogout} className='text-decoration-none text-black ms-3 text-white' to="/login">Logout
           </Link>
        ) : (
          <Link className='text-decoration-none text-black ms-3 text-white' to="/login">Login
          </Link>
        )}
       <li className='ms-3 text-white'>{user?.email}</li>
            <Link className='text-decoration-none text-black ms-3 text-white' to="/register">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;