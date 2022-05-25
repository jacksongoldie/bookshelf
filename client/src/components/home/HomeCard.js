import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function HomeCard() {
  return (
    <div>
        <Col>
        <Card className="text-center my-3">
        <Card.Header>Header</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        </Col>
    </div>
  )
};

export default HomeCard;