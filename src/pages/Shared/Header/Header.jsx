import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar fixed="top" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className='text-white fw-bold' href="#home">The Kitchen Diaries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='text-decoration-none text-black ms-3 text-white' to="/">Home</Link>
            <Link className='text-decoration-none text-black ms-3 text-white' to="/blog">Blog</Link>
            <Link className='text-decoration-none text-black ms-3'><Image src="holder.js/171x180" roundedCircle /></Link>
            <Link className='text-decoration-none text-black ms-3 text-white' to="/login">Login</Link>
            <Link className='text-decoration-none text-black ms-3 text-white' to="/register">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;