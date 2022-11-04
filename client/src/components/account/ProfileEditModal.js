import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ProfileEditModal({ handleClose, show, profile, handleChange, onSetProfile }) {
console.log(profile.id)

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/profiles/${profile.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)})
            .then(r => r.json())
            .then(onSetProfile)
            handleClose();
        }

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="profile">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' value={profile.name} onChange={handleChange} />
                    <br />
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" name='image' value={profile.image} accept='image/*' onChange={handleChange} />
                    <br />
                    <Form.Label>Bio</Form.Label>
                    <Form.Control type="textarea" name='bio' value={profile.bio} onChange={handleChange} />
                </Form.Group>
                <Button type='Submit'>Submit</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleClose}> Cancel </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ProfileEditModal