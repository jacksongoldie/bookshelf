import MyShelfButtons from './MyShelfButtons';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function MyShelfCard({ book, onSetUserBooks, onDeleteUserBook, categories, ages }) {
  console.log(book.current_user_input)
    const star = '⭐'
  return (
    <div>
      <Col>
        <Card border="success" style={{ width: '18em', margin: '1em' }}>
        <Card.Body>
        <Card.Title>{book.title}</Card.Title>
          {book.img ? <Card.Img style={{ height: '150px', width: '150px' }} src={book.img} /> : <Card.Img variant="top" src={null} />}
          <Stack>
          {book.review ? 
            <>
            <Card.Text>{book.review.rate ? star.repeat(book.review.rate) : null}</Card.Text>
            <Card.Text>
              {book.review.text ? book.review.text.slice(0,250) : null}
            </Card.Text>
            </>
          : null}
          </Stack>
          <MyShelfButtons book={book} onSetUserBooks={onSetUserBooks} ages={ages} categories={categories} onDeleteUserBook={onDeleteUserBook} />
        </Card.Body>
        </Card>
      </Col>
    </div>
  )
};

export default MyShelfCard;