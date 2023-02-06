import MyShelfCard from "./MyShelfCard";
import Row from 'react-bootstrap/Row';

function MyShelfCards({ userBooks, onSetUserBooks, onDeleteUserBook, categories, ages }) {
    

  return (
    <div>
        <Row xs={1} md={3} lg={3} xl={4}>
          {/* {displayFilteredBooks()} */}
          {userBooks.map((book) => <MyShelfCard book={book} key={book.id} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} ages={ages} categories={categories} />)}
        </Row>
    </div>
  )
};

export default MyShelfCards;