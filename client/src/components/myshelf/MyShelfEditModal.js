import Modal from 'react-bootstrap/Modal';
import defaultPhoto from '../assets/booksPhoto.jpg';
import Button from 'react-bootstrap/Button';
import MyShelfEditForm from './MyShelfEditForm';


function MyShelfEditModal({ show, handleClose, book, isDeleting, onDeleteUserBook, onSetUserBooks, onSetIsDeleting }) {

    function handleDelete(){
        console.log('in delete')
        //WILL NEED TO CHANGE TO NEW ID
        onDeleteUserBook(book.googleData.google_id)
    }

    function handleCancel(){
        handleClose()
        onSetIsDeleting()
    }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {isDeleting ?
        <>
        <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure?
            <Button onClick={handleDelete} variant="success">Yes</Button>
            <Button onClick={handleCancel} variant="success">No</Button>
        </Modal.Body>
        </> :
        <>
        <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
                    <Modal.Body>
                    {book.googleData.img ? <> <img src={book.googleData.img} className="rounded mx-auto d-block" height='80px' alt={book.googleData.title + ' thumbnail'} /> </> : <img className="rounded mx-auto d-block" height='80px' src={defaultPhoto} alt='default thumbnail' />}
                    </Modal.Body>
                <Modal.Body>
                    <MyShelfEditForm book={book} bookInfoFromGoogle={book.googleData} onSetUserBooks={onSetUserBooks} />
                </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={handleClose}> Cancel </Button>
        </Modal.Footer>
        </>
        }
        </Modal>
    </>)
};

export default MyShelfEditModal;