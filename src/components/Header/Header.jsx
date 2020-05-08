import React from "react";

import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="main-container">
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Navbar.Brand href="/">Movies List</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
