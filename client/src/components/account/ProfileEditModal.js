import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

function ProfileEditModal({ handleClose, show, profile, onSetProfile }) {

const [img, setImg] = useState(null)
const [formData, setFormData] = useState({})
const [errors, setErrors] = useState([])

useEffect(() =>{
    setFormData(profile)
}, [profile])

console.log(formData, profile)
    function handleSubmit(e){
        e.preventDefault();
        const profileToUpdate = new FormData()
        profileToUpdate.append('name', formData.name)
        profileToUpdate.append('bio', formData.bio)
        if(img){
            profileToUpdate.append('img', img)
        }
        if(!profile.id){
            fetch(`/profiles`, {
                method: 'POST',
                body: profileToUpdate
            })
            .then(r => {
                if(r.ok){
                    r.json().then(onSetProfile)
                }
                else{
                    r.json().then(setErrors)
                }})
            }
        else{
            fetch(`/profiles/${profile.id}`, {
                method: 'PATCH',
                body: profileToUpdate})
                .then(r => {
                    if(r.ok){
                        r.json().then(onSetProfile)
                    }
                    else{
                        r.json().then(setErrors)
                    }})
                .then(onSetProfile)
                handleClose();
        }
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
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
                    <Form.Control required type="text" name='name' value={formData.name} onChange={handleChange} />
                    <br />
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" name='img' value={undefined} accept='image/*' onChange={(e) => setImg(e.target.files[0])} />
                    <br />
                    <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" name='bio' value={formData.bio} onChange={handleChange} style={{ height: '100px' }} />
                    <Form.Text>{errors.errors ? <> {errors.errors.map((e) => <p>{e}</p>)}</> : null}</Form.Text>
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