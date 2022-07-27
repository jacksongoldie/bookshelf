import MyShelfEditModal from './MyShelfEditModal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function MyShelfButtons({ book, onSetUserBooks, onDeleteUserBook }) {

    const [show, setShow] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function handleDelete(){
      debugger;
      setIsDeleting((mUV) => !mUV)
      handleShow();
    }

    function onSetIsDeleting(){
      setIsDeleting((mUV) => !mUV)
    }
    
  return (
    <div>
        <Button onClick={handleShow} variant="success">✏️ Edit</Button>
        <Button onClick={handleDelete} variant="success"> Delete</Button>
        <MyShelfEditModal isDeleting={isDeleting} onSetIsDeleting={onSetIsDeleting} handleClose={handleClose} show={show} book={book} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} />
    </div>
  )
};

export default MyShelfButtons;