import myImage from '../components/post1pic.jpg';
import { Card } from "react-bootstrap";

const Post1 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={ myImage }
                width={ 20 }
                height={250}
            />
            <Card.Body>
                <Card.Title>AI in the Workforce: Evolution or Extinction?</Card.Title>
                <Card.Text>
                    Artificial Intelligence is rapidly changing industries, replacing some jobs while creating new opportunities. 
                    Is this an evolution of work or the beginning of mass unemployment? Explore the impact of AI on different 
                    sectors and what history tells us about technological revolutions.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    );
};

export default Post1;
