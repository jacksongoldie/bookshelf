import AddFromBrowseForm from './AddFromBrowseForm';
import defaultPhoto from '../assets/booksPhoto.jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddFromBrowseModal({ user, handleClose, show, book, onSetUserBooks, categories, ages }) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to MyShelf</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {book.volumeInfo.imageLinks ? <> <img src={book.volumeInfo.imageLinks.thumbnail} className="rounded mx-auto d-block" alt={book.volumeInfo.title + ' thumbnail'} /> </> : <img className="rounded mx-auto d-block" height='200px' src={defaultPhoto} alt='default thumbnail' />}

            <AddFromBrowseForm user={user} handleClose={handleClose} book={book} categories={categories} ages={ages} onSetUserBooks={onSetUserBooks} />
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