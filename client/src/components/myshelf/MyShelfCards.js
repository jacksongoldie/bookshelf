import MyShelfCard from "./MyShelfCard";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function MyShelfCards({ userBooks, onSetUserBooks, onDeleteUserBook }) {
    console.log(userBooks)
    const allUserBooks = userBooks.map((book) => <MyShelfCard book={book} key={book.google_id} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} />);

  return (
    <div>
      <Container>
        <Row xs={1} md={3} lg={3}>
          {allUserBooks}
        </Row>
      </Container>
    </div>
  )
};

export default MyShelfCards;