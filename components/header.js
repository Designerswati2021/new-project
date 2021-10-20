import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Styles from "../styles/banner.module.css";
import { RiFacebookCircleLine } from "react-icons/ri";

const header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://thewingshield.com/assets/img/logo/thewingshield-logo.webp"
              className={Styles.logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="Text-center"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#feature">Features</Nav.Link>
              <Nav.Link href="#service">Services</Nav.Link>
              <Nav.Link href="#step">Steps</Nav.Link>
            </Nav>
            <Nav>
              <RiFacebookCircleLine />
              <RiFacebookCircleLine />
              <RiFacebookCircleLine />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default header;
