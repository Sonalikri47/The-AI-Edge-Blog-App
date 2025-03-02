import mylogo from '../components/AI logo.jpg';

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';

const BlogNav = () => {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "#A3C1D4" }}>
            <Container>
                {/* Logo */}
                <Navbar.Brand href="/">
                    <img
                        src={mylogo}
                        height="50"
                        
                    />
                    <span style={{ color: "Black", marginLeft: "5px" }}><strong>The AI Edge</strong> – Stay ahead in the AI revolution</span>
                </Navbar.Brand>

                {/* Navbar Toggle for Mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="me-auto">
                        <Nav.Link href="#ai-workforce" style={{ color: "white" }}>AI in Workforce</Nav.Link>
                        <Nav.Link href="#humans-vs-machines" style={{ color: "white" }}>Humans vs Machines</Nav.Link>
                        <Nav.Link href="#ai-job-crisis" style={{ color: "white" }}>AI Job Crisis</Nav.Link>
                        <Nav.Link href="#preparing-for-ai" style={{ color: "white" }}>Preparing for AI</Nav.Link>
                        
                    </Nav>

                    {/* Search Form */}
                    <Form className="d-flex">
                        <FormControl type="text" placeholder="Search" className="me-2" />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BlogNav;
