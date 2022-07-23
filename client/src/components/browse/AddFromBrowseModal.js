import AddFromBrowseForm from './AddFromBrowseForm';
import defaultPhoto from '/home/goldi/Development/code/Mod5/bookshelf/client/src/assets/booksPhoto.jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddFromBrowseModal({ handleClose, show, book, onSetUserBooks }) {

    console.log(book)

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to MyShelf</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {/* <img src={book.volumeInfo.imageLinks.thumbnail} className="rounded mx-auto d-block" alt={book.volumeInfo.title + ' thumbnail'} /> */}

        {book.volumeInfo.imageLinks ? <> <img src={book.volumeInfo.imageLinks.thumbnail} className="rounded mx-auto d-block" alt={book.volumeInfo.title + ' thumbnail'} /> </> : <img className="rounded mx-auto d-block" height='200px' src={defaultPhoto} alt='default thumbnail' />}

            <AddFromBrowseForm handleClose={handleClose} book={book} onSetUserBooks={onSetUserBooks} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddFromBrowseModal;