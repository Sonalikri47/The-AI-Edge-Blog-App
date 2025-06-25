// CommentSection.js
import React, { useState } from 'react';
import { Card, Form, Button, ListGroup } from 'react-bootstrap';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <Card className="mt-4">
            <Card.Body>
                <Card.Title>Comments</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="commentTextarea">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Write your comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-2">Post Comment</Button>
                </Form>

                <ListGroup variant="flush" className="mt-3">
                    {comments.length === 0 ? (
                        <ListGroup.Item>No comments yet. Be the first!</ListGroup.Item>
                    ) : (
                        comments.map((comment, index) => (
                            <ListGroup.Item key={index}>{comment}</ListGroup.Item>
                        ))
                    )}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default CommentSection;
