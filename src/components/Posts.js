import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";

import { Container, Row, Col, Card } from 'react-bootstrap';

const Posts = () => {
    return (
        <Container className="mt-4">
            <Row className="justify-content-between">
                {/* Main Content - Blog Posts */}
                <Col md={9}>
                    <Post1 />
                    <Post2 />
                    <Post3 />
                    <Post4 />
                </Col>

                {/* Sidebar - Recent Posts */}
                <Col md={3} className="mt-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Recent Posts</Card.Title>
                            <ul className="list-unstyled">
                                <li><a href="#">AI in the Workforce</a></li>
                                <li><a href="#">Humans vs. Machines</a></li>
                                <li><a href="#">The AI Job Crisis</a></li>
                                <li><a href="#">Preparing for AI</a></li>
                                
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Posts;
