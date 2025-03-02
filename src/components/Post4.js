import myImage4 from '../components/post4pic.jpg';

import { Card } from "react-bootstrap";

const Post4 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={myImage4}
                height={250}
            />
            <Card.Body>
                <Card.Title>Preparing for the AI Revolution: What Can Workers Do?</Card.Title>
                <Card.Text>
                    AI is here to stay, and workers need to adapt. Learn about the best upskilling strategies, 
                    industries that are thriving in an AI-driven world, and how education systems are evolving 
                    to prepare the next generation for the future of work.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    );
};

export default Post4;
