import myImage3 from '../components/post3pic.jpg';
import { Card } from "react-bootstrap";

const Post3 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={ myImage3}
                height={250}
            />
            <Card.Body>
                <Card.Title>The AI Job Crisis: Myth or Reality?</Card.Title>
                <Card.Text>
                    There is growing concern that AI and automation will eliminate millions of jobs worldwide. 
                    But is this fear justified? This post examines expert opinions, studies, and real-world 
                    examples to determine if AI is a threat or an opportunity.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    );
};

export default Post3;
