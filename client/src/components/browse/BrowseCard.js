import BrowseCardButton from './BrowseCardButton';
import defaultPhoto from '/home/goldi/Development/code/Mod5/bookshelf/client/src/assets/booksPhoto.jpg';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';


function BrowseCard({ book }) {
    
  return (
    <div>
        <Col>
        <Card style={{ width: '14em', margin: '2em'}}>
        {book.volumeInfo.imageLinks ? <Card.Img style={{ height: '350px' }} variant="top" src={book.volumeInfo.imageLinks.thumbnail} /> : <Card.Img variant="top" src={defaultPhoto} />}
            <Card.Body>
                <Stack gap={2} className="me-auto">
                    <Card.Title style={{ height: '3em'}}>{book.volumeInfo.title}</Card.Title>
                    <Card.Text style={{ height: '20em'}}>
                    {book.volumeInfo.description ? book.volumeInfo.description.slice(0,250) + '...' : null}
                    </Card.Text>
                  <BrowseCardButton />  
                </Stack>
            </Card.Body>
        </Card>
        </Col>
    </div>
  )
}

export default BrowseCard