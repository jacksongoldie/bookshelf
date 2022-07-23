import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import AddFromBrowseModal from './AddFromBrowseModal';

function BrowseCardButton({ book, onSetUserBooks }) {
    //will need to be passed: onClick, Heading
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
  return (
    <div>
        <Button onClick={handleShow} variant="success">Add to MyShelf</Button>
        <AddFromBrowseModal handleClose={handleClose} show={show} book={book} onSetUserBooks={onSetUserBooks} />
    </div>
  )
};

export default BrowseCardButton;