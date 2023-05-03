import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">The Kitchen Diaries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link"><Image src="holder.js/171x180" roundedCircle /></Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;