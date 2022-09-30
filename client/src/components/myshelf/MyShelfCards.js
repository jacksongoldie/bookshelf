import MyShelfCard from "./MyShelfCard";
import Row from 'react-bootstrap/Row';

function MyShelfCards({ userBooks, onSetUserBooks, onDeleteUserBook, categories, ages }) {
  
    const allUserBooks = userBooks.map((book) => <MyShelfCard book={book} key={book.id} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} ages={ages} categories={categories} />);

  return (
    <div>
        <Row xs={1} md={3} lg={4} xl={5}>
          {allUserBooks}
        </Row>
    </div>
  )
};

export default MyShelfCards;