import MyShelfEditModal from './MyShelfEditModal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyShelfButtons({ book, onSetUserBooks, onDeleteUserBook, categories, ages }) {

    const [show, setShow] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function handleDelete(){
      //need to fetch the user input and delete?? 
      setIsDeleting((mUV) => !mUV)
      handleShow();
    }

    function onSetIsDeleting(){
      setIsDeleting((mUV) => !mUV)
    }
    
  return (
    <div>
      <Row xs={2}>
        <Col>
        <Button onClick={handleShow} variant="success">✏️Edit</Button>
        </Col>
        <Col>
        <Button onClick={handleDelete} variant="success">🗑️Delete</Button>
        </Col>
      </Row>
        <MyShelfEditModal isDeleting={isDeleting} ages={ages} categories={categories} onSetIsDeleting={onSetIsDeleting} handleClose={handleClose} show={show} book={book} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} />
    </div>
  )
};

export default MyShelfButtons;