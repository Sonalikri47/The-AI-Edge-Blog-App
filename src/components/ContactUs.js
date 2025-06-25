// ContactUs.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Container className="mt-5" style={{ maxWidth: '600px' }}>
            <h2>Contact Us</h2>
            {submitted && <Alert variant="success">Your message has been sent!</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    );
};

export default ContactUs;
