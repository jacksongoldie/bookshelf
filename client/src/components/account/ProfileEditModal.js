import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function ProfileEditModal({ handleClose, show, profile, handleChange, onSetProfile }) {
console.log(profile)

const [img, setImg] = useState(null)

    function handleSubmit(e){
        e.preventDefault();
        debugger
        console.log(img)
        const profileToUpdate = new FormData()
        profileToUpdate.append('name', profile.name)
        profileToUpdate.append('img', img)
        fetch(`/profiles/${profile.id}`, {
            method: 'PATCH',
            body: profileToUpdate})
            .then(r => r.json())
            .then(onSetProfile)
            handleClose();
        }

    console.log(img)

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
                    <Form.Control type="file" name='img' value={undefined} accept='image/*' onChange={(e) => setImg(e.target.files[0])} />
                    <br />
                    <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" name='bio' value={profile.bio} onChange={handleChange} />
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