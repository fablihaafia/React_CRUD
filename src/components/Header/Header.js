import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container-fluid mx-0">
          <img src={logo} alt="" className="logo img-fluid" />
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
              <Nav className="me-auto">
                <Nav.Link href="/Shop">Shop</Nav.Link>
                <Nav.Link href="#features">Order Review</Nav.Link>
                <Nav.Link href="#pricing">Manage Inventory here</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div className="searchsection bg-warning p-3">
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
