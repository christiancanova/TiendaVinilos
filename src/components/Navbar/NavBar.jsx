import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
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
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Navbar.Brand as={Link} to={"/"}>Hamilton Records</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="my-2 me-auto my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link as={Link} to={`/categoria/${idcategoria.rock}`}>Rock</Nav.Link>
          <Nav.Link as={Link} to={`/categoria/${idcategoria.pop}`}>Pop</Nav.Link>
          <Nav.Link as={Link} to={`/categoria/${idcategoria.tango}`}>Tango</Nav.Link>
          <Nav.Link as={Link} to={`/cart`} ><CartWidjet /></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar en la tienda..."
              className="me-2"
              aria-label="Search"/>
            <Button variant="outline-dark">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;