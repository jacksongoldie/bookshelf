import MyShelfButtons from './MyShelfButtons';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function MyShelfCard({ book, onSetUserBooks, onDeleteUserBook }) {
    console.log(book)
    const star = '⭐'
  return (
    <div>
      <Col>
        <Card border="success" style={{ width: '18em', margin: '1em', padding: '.5em' }}>
        <Card.Body>
        <Card.Title>{book.title}</Card.Title>
          {book.img ? <Card.Img style={{ height: '150px', width: '150px' }} src={book.img} /> : <Card.Img variant="top" src={null} />}
          <Card.Text>{star.repeat(book.review.rate)}</Card.Text>
            <Card.Text>
              {book.review.text ? book.review.text.slice(0,250) : null}
            </Card.Text>
          <MyShelfButtons book={book} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} />
        </Card.Body>
        </Card>
      </Col>
    </div>
  )
};

export default MyShelfCard;