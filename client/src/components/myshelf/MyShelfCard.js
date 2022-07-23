import MyShelfEditButton from './MyShelfEditButton';
import MyShelfDeleteButton from './MyShelfDeleteButton';
import Card from 'react-bootstrap/Card';
import defaultPhoto from '/home/goldi/Development/code/Mod5/bookshelf/client/src/assets/booksPhoto.jpg';

function MyShelfCard({ book }) {
    console.log(book)
    const star = '⭐'
  return (
    <div>
        <Card border="success" style={{ width: '18rem' }}>
        <Card.Header>{book.googleData.title}</Card.Header>
        {book.googleData.img ? <Card.Img style={{ height: '350px' }} variant="top" src={book.googleData.img} /> : <Card.Img variant="top" src={defaultPhoto} />}
        <Card.Body>
          <Card.Title>{star.repeat(book.userReview.rate)}</Card.Title>
          <Card.Text>
            {book.userReview.text}
          </Card.Text>
        </Card.Body>
        <MyShelfEditButton book={book} />
        <MyShelfDeleteButton book={book} />
      </Card>
    </div>
  )
};

export default MyShelfCard;