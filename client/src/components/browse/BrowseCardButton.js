import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import AddFromBrowseModal from './AddFromBrowseModal';

function BrowseCardButton({ user, book, onSetUserBooks, userBooks, categories, ages }) {
    //will need to be passed: onClick, Heading
    console.log(userBooks)
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
  return (
    <div>
      {userBooks.find((b) => b.google_id === book.id) ? 
      <>
      <p>You have this book saved!</p>
      {/* <Button variant="success">View on MyShelf</Button> */}
      </>
      :
      <>
      <Button onClick={handleShow} variant="success">Add to MyShelf</Button>
      <AddFromBrowseModal user={user} handleClose={handleClose} show={show} book={book} categories={categories} ages={ages} onSetUserBooks={onSetUserBooks} />
      </>
    }
  </div>
  )
}
    


export default BrowseCardButton;