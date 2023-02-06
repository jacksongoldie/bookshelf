import MyShelfButtons from './MyShelfButtons';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function MyShelfCard({ book, onSetUserBooks, onDeleteUserBook, categories, ages }) {

    const star = '⭐'
  return (
    <div style={{ margin:'2em' }}> 
      <Col> 
        <Card border="success" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>{book.title}</Card.Title>
          {book.img ? <Card.Img style={{ height: '150px', width: '150px' }} src={book.img} /> : <Card.Img variant="top" src={null} />}
          <Stack>
          {book.current_user_input.review ? 
            <>
            <Card.Text>{book.current_user_input.review.rate ? star.repeat(book.current_user_input.review.rate) : null}</Card.Text>
            <Card.Text>
              {book.current_user_input.review.text ? book.current_user_input.review.text.slice(0,250) : null}
            </Card.Text>
            </>
          : null}
          </Stack>
          <MyShelfButtons style={{ marginTop: '1em' }} book={book} onSetUserBooks={onSetUserBooks} ages={ages} categories={categories} onDeleteUserBook={onDeleteUserBook} />
        </Card.Body>
        </Card>
      </Col>
    </div>
  )
};

export default MyShelfCard;