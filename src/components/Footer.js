// src/components/Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '30px 0' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>The AI Edge</h5>
            <p>Stay ahead in the AI revolution. Insights, stories, and updates on the future of automation and intelligence.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#ai-workforce" style={{ color: '#ccc' }}>AI in Workforce</a></li>
              <li><a href="#humans-vs-machines" style={{ color: '#ccc' }}>Humans vs Machines</a></li>
              <li><a href="#preparing-for-ai" style={{ color: '#ccc' }}>Preparing for AI</a></li>
              <li><a href="#contact" style={{ color: '#ccc' }}>Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect</h5>
            <p>Email: info@theaiedge.com</p>
            <p>Follow us on:</p>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: '#ccc', marginRight: '10px' }}>Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#ccc' }}>LinkedIn</a>
          </Col>
        </Row>
        <hr style={{ borderTop: '1px solid #666' }} />
        <p className="text-center">&copy; {new Date().getFullYear()} The AI Edge. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
