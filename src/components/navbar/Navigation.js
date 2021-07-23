import { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import Button from 'react-bootstrap/Button';

const Navigation = () => {
  return (
    <Fragment>
    <Navbar
    bg="dark"
      variant="dark"
      expand="md"
      className="animate-navbar nav-theme justify-content-between"
    >
      <Navbar.Brand href="/">College Football Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/conferences">Conferences</Nav.Link>
          <Nav.Link href="/stadiums">Stadiums</Nav.Link>
          <Nav.Link href="/team-info">Team Info</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
  );
};

export default Navigation;
