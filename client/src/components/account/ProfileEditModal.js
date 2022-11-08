import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function ProfileEditModal({ handleClose, show, profile, handleChange, onSetProfile }) {

const [img, setImg] = useState(null)

    function handleSubmit(e){
        e.preventDefault();
        const profileToUpdate = new FormData()
        profileToUpdate.append('name', profile.name)
        if(profile.bio){
            profileToUpdate.append('bio', profile.bio)
        }
        if(img){
            profileToUpdate.append('img', img)
        }
        if(!profile.id){
            fetch(`/profiles`, {
                method: 'POST',
                body: profileToUpdate
            })
            .then(r => r.json())
            .then(onSetProfile)
        }
        else{
            fetch(`/profiles/${profile.id}`, {
                method: 'PATCH',
                body: profileToUpdate})
                .then(r => r.json())
                .then(onSetProfile)
                handleClose();
        }
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
                    <Form.Label>Name </Form.Label>
                    <Form.Text> (names are unique and how your friends find you)</Form.Text>
                    <Form.Control required type="text" name='name' value={profile.name} onChange={handleChange} />
                    <br />
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" name='img' value={undefined} accept='image/*' onChange={(e) => setImg(e.target.files[0])} />
                    <br />
                    <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" name='bio' value={profile.bio} onChange={handleChange} style={{ height: '100px' }} />
                </Form.Group>
                <Button variant="success" type='Submit'>Submit</Button>
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