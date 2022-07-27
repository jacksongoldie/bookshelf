import MyShelfCard from "./MyShelfCard";
import Row from 'react-bootstrap/Row';

function MyShelfCards({ userBooks, onSetUserBooks, onDeleteUserBook }) {
    console.log(userBooks)
    const allUserBooks = userBooks.map((book) => <MyShelfCard book={book} key={book.googleData.google_id} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} />);

  return (
    <div>
      <Row xs={1} md={3} lg={3}>
        {allUserBooks}
      </Row>
    </div>
  )
};

export default MyShelfCards;