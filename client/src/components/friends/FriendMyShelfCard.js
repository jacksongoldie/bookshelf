import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FriendMyShelfCard({ book }) {

  return (
    <div style={{ marginTop: '.5em' }}>
        <Card style={{ padding: '.2em' }}>
            <Card.Title>
            {book.book.title}
            </Card.Title> 
            <Row>
                <Col>
                    <Card.Img style={{ height:'15vh', width: '7vh'}} src={book.book.img}></Card.Img>
                </Col>
                <Col>
                    {book.spice ? <Card.Text>Spice: {'🌶️'.repeat(book.spice)}</Card.Text> : null}
                    {book.violence ? <Card.Text>Violence: {'🔫'.repeat(book.violence)}</Card.Text> : null}
                    {book.language ? <Card.Text>Language: {'🤬'.repeat(book.language)}</Card.Text> : null}
                </Col>
            </Row>
            <Row>
            {book.review.rate ? <Card.Text>{'⭐'.repeat(book.review.rate)}</Card.Text> : ' '}
            {book.review.text ? <Card.Text>{book.review.text}</Card.Text> : null}
            </Row>
        </Card>
    </div>
  ) 
};

export default FriendMyShelfCard;