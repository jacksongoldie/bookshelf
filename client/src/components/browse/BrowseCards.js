import BrowseCard from './BrowseCard';
import Row from 'react-bootstrap/Row';

function BrowseCards({ books, onSetUserBooks, userBooks, categories, ages }) {

  function browseCardsToDisplay(){
    return books.map((book) => <BrowseCard key={book.id} book={book} onSetUserBooks={onSetUserBooks} userBooks={userBooks} categories={categories} ages={ages} />)
  }

  return (
    <div>
      <Row xs={1} md={3} lg={4} xl={5}>
        {books ? browseCardsToDisplay() : null}
      </Row>
    </div>
  )
};

export default BrowseCards;