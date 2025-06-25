// src/components/Posts.js

import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import { Container, Row, Col, Card } from 'react-bootstrap';

const Posts = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-between">
        {/* Blog Cards */}
        <Col md={8} className="mb-4">
          <Post1 />
        </Col>

        <Col md={3} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Recent Posts</Card.Title>
              <ul className="list-unstyled mb-0">
                <li><a href="#ai-workforce">AI in Workforce</a></li>
                <li><a href="#humans-vs-machines">Humans vs Machines</a></li>
                <li><a href="#ai-job-crisis">AI Job Crisis</a></li>
                <li><a href="#preparing-for-ai">Preparing for AI</a></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8} className="mb-4">
          <Post2 />
        </Col>

        <Col md={8} className="mb-4">
          <Post3 />
        </Col>

        <Col md={8} className="mb-4">
          <Post4 />
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
