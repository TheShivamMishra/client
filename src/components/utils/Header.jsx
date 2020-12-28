import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Logo from "../../assets/images/blood-drop (1).png";
import "./style.css";

function Header() {
  return (
    <header>
      <Navbar
        className="navbarModified"
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/" className="ml-4">
          {/* <img
            alt=""
            src={Logo}
            width="35"
            height="25"
            className="d-inline-block align-top"
          />{" "} */}
          Rudhiram
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blogs" className="mr-5">Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
