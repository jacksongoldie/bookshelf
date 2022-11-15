import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Delete({ setShowDeleteModal, show, handleDelete }) {
   
  const handleClose = () => {
    setShowDeleteModal((mUV) => !mUV)
  }
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure?
            <Button style={{ margin: '.5em' }} onClick={handleDelete} variant="success">Yes</Button>
            <Button onClick={()=>setShowDeleteModal(false)} variant="success">No</Button>
        </Modal.Body>
        </Modal>
    </div>
  )
};

export default Delete;