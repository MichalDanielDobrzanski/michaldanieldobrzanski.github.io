import React from 'react';
import * as ROUTES from '../pages/Routes.js';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar expand="lg">
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <Navbar.Brand as={Link} to={ROUTES.HOME}>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to={ROUTES.PLANTER_HOME_ROUTE}>Planter Home</Nav.Link>
          <Nav.Link href="/planter/privacypolicy/">Planter Privacy Policy</Nav.Link>
          <Nav.Link href="/planter/termsandconditions/">Planter Terms And Conditions</Nav.Link>
          <Nav.Link href="/planter/delete/">Delete Planter account</Nav.Link>
          <Nav.Link href="/hourglass/">Hourglass</Nav.Link>
          <Nav.Link as={Link} to={ROUTES.CONTACT_ROUTE}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;

