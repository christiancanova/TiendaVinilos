import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidjet from './CartWidjet';
import 'bootstrap/dist/css/bootstrap.min.css'




function NavScrollExample() {

  const idcategoria = {
        rock: "rock",
        pop: "pop",
        tango: "tango",
  }

  return (
    <div>
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container fluid>
      <Navbar.Brand as={Link} to={"/"}>TIENDA DE VINILOS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="my-2 me-auto my-lg-0" style={{ maxHeight: '110px' }} navbarScroll>
          <Nav.Link as={Link} to={`/categoria/${idcategoria.rock}`}>Rock</Nav.Link>
          <Nav.Link as={Link} to={`/categoria/${idcategoria.pop}`}>Pop</Nav.Link>
          <Nav.Link as={Link} to={`/categoria/${idcategoria.tango}`}>Tango</Nav.Link>
          <Nav.Link as={Link} to={`/cart`} ><CartWidjet /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;