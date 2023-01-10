import BrowseCard from './BrowseCard';
import Row from 'react-bootstrap/Row';

function BrowseCards({ user, books, onSetUserBooks, userBooks, categories, ages }) {

  function browseCardsToDisplay(){
    return books.map((book) => <BrowseCard user={user} key={book.id} book={book} onSetUserBooks={onSetUserBooks} userBooks={userBooks} categories={categories} ages={ages} />)
  }

  return (
    <div>
      <Row xs={1} md={3} lg={4} xl={4}>
        {books ? browseCardsToDisplay() : null}
      </Row>
    </div>
  )
};

export default BrowseCards;