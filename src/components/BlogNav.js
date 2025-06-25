// src/components/BlogNav.js

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  NavDropdown,
} from "react-bootstrap";
import mylogo from "../components/AI logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogNav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expand="lg"
      sticky="top"
      variant="dark"
      style={{
        backgroundColor: "#1F2A44",
        padding: "12px 0",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 999,
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={mylogo}
            height="50"
            alt="The AI Edge Logo"
            style={{ borderRadius: "5px" }}
          />
          <span
            style={{
              color: "#F0F0F0",
              marginLeft: "12px",
              fontWeight: "600",
              fontSize: "1.2rem",
            }}
          >
            The AI Edge
          </span>
        </Navbar.Brand>

        {/* Responsive Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              style={getNavStyle(isActive("/"))}
            >
              Home
            </Nav.Link>

            <NavDropdown
              title="Topics"
              id="topics-nav-dropdown"
              menuVariant="dark"
              style={{ color: "#E0E0E0" }}
            >
              <NavDropdown.Item href="#ai-workforce">AI in Workforce</NavDropdown.Item>
              <NavDropdown.Item href="#humans-vs-machines">Humans vs Machines</NavDropdown.Item>
              <NavDropdown.Item href="#ai-job-crisis">AI Job Crisis</NavDropdown.Item>
              <NavDropdown.Item href="#preparing-for-ai">Preparing for AI</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/about"
              style={getNavStyle(isActive("/about"))}
            >
              About
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              style={getNavStyle(isActive("/contact"))}
            >
              Contact
            </Nav.Link>

            <Form className="d-flex ms-3">
              <FormControl
                type="search"
                placeholder="Search articles..."
                className="me-2"
                aria-label="Search"
                style={{
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const getNavStyle = (isActive) => ({
  color: isActive ? "#FFD700" : "#E0E0E0",
  fontWeight: "500",
  marginRight: "15px",
  textTransform: "capitalize",
  textDecoration: isActive ? "underline" : "none",
});

export default BlogNav;
