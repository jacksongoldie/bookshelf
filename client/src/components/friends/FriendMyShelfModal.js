import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import MyShelf from '../myshelf/MyShelf';

function FriendMyShelfModal({ user_id, errors, setShow, show }) {

    console.log(errors)

    const [books, setBooks] = useState([])


  const handleClose = () => {
    setShow(false)
  }

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                {errors.length > 0 ? errors.map((e)=> <p>{e}</p>) : null}
            </Modal.Body>
        </Modal>

    </div>
  )
};

export default FriendMyShelfModal;