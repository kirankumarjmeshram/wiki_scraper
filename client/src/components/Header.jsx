import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/">Wiki Scraper</Nav.Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
