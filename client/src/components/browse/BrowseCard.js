import BrowseCardButton from './BrowseCardButton';
import defaultPhoto from '../assets/booksPhoto.jpg';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';


function BrowseCard({ user, book, onSetUserBooks, userBooks, categories, ages }) {
    
  return (
    <div>
        <Col>
        <Card style={{ width: '14em', margin: '2em'}}>
        {book.volumeInfo.imageLinks ? <Card.Img style={{ height: '350px' }} variant="top" src={book.volumeInfo.imageLinks.thumbnail} /> : <Card.Img variant="top" src={defaultPhoto} />}
            <Card.Body>
                <Stack gap={2} className="me-auto">
                    <Card.Title style={{ height: '3em'}}>{book.volumeInfo.title.slice(0,45)}</Card.Title>
                    <Card.Text style={{ height: '20em'}}>
                    {book.volumeInfo ? book.volumeInfo.description.slice(0,250) + "..." : null}
                    </Card.Text>
                 {user.id ? <BrowseCardButton user={user} book={book} userBooks={userBooks} onSetUserBooks={onSetUserBooks} categories={categories} ages={ages} /> : null }
                </Stack>
            </Card.Body>
        </Card>
        </Col>
    </div>
  )
}

export default BrowseCard