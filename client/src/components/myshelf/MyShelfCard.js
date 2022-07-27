import MyShelfButtons from './MyShelfButtons';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyShelfCard({ book, onSetUserBooks, onDeleteUserBook }) {
    console.log(book)
    const star = '⭐'
  return (
    <div>
      <Col>
        <Card border="success" style={{ margin: '1em', padding: '.5em'}}>
        <Card.Title>{book.googleData.title}</Card.Title>
        <Row xs={2}>
          <Col>
          {book.googleData.img ? <Card.Img style={{ height: '20vh' }} variant="top" src={book.googleData.img} /> : <Card.Img variant="top" src={null} />}
          </Col>
          <Col>
          <Card.Body>
            <Card.Text>{star.repeat(book.userReview.rate)}</Card.Text>
            <Card.Text>
              {book.userReview.text}
            </Card.Text>
            <MyShelfButtons book={book} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} />
          </Card.Body>
          </Col>
        </Row>
        </Card>
      </Col>
    </div>
  )
};

export default MyShelfCard;