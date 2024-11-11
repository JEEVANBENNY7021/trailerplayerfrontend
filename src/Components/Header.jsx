import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="bg-body-black">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://img.freepik.com/premium-vector/black-white-logo-cinema_10375-516.jpg"
              width="90"
              height="90"
              className="d-inline-block align-top"
            />{' '}
         TRAILER HUB 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="ms-3">Home</Nav.Link>
              <Nav.Link href="/Home" className="ms-3">Upload</Nav.Link>
              <Nav.Link href="" className="ms-3">Upcoming Movies</Nav.Link>
              <Nav.Link href="#anime-trailers" className="ms-3">Anime Trailers</Nav.Link>
              <Nav.Link href="#popular-trailer" className="ms-3">Popular Trailer</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
