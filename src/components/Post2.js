import myImage2 from '../components/post2pic.jpg';
import { Card } from "react-bootstrap";

const Post2 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={ myImage2 }
                height={250}
            />
            <Card.Body>
                <Card.Title>Humans vs. Machines: Which Jobs Are Safe from AI?</Card.Title>
                <Card.Text>
                    With AI automating tasks across multiple industries, many wonder which jobs will remain secure in the future. 
                    This post explores the professions that AI struggles to replace and highlights the skills that will remain 
                    valuable in an automated world.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    );
};

export default Post2;
