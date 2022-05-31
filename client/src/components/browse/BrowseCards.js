import BrowseCard from './BrowseCard';
import Row from 'react-bootstrap/Row';

function BrowseCards({ books }) {
  console.log(books)

  function browseCardsToDisplay(){
    return books.map((book) => <BrowseCard key={book.id} book={book}/>)
  }

  return (
    <div>
      <Row xs={1} md={3} lg={5} xl={6}>
        {books ? browseCardsToDisplay() : null}
      </Row>
    </div>
  )
};

export default BrowseCards;