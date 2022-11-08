import {useState, useEffect} from 'react';
import account from '../assets/account.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileEditModal from './ProfileEditModal';
import Delete from './Delete';

function AccountInfo({ user, profile, onSetProfile, onSetUser }) {

  const [show, setShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  console.log(showDeleteModal)
  const formData = {
    name: '',
    bio: '',
    likes: 0,
    image: ''
  }

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false)
    onSetProfile(profile ? profile : {})
  }

  function handleChange(e){
      onSetProfile({...profile, [e.target.name]: e.target.value})
  }

  function handleDelete(){
    fetch(`/members/${user.id}`,{
      method: 'DELETE'
    })
    .then(onSetUser({}))
  }

  return (
    <div>
        <Row><h2>Welcome back, {!profile ? user.email : profile.name ? profile.name : user.email}!</h2></Row>
        <br/>
        <Row>
          <Col>
          <Image fluid thumbnail src={profile ? profile.image ? profile.image: account : account} alt="profile" width={'150px'}/>
          </Col>
          <Col>
            <Button variant='success' onClick={handleShow}>Edit Profile</Button>
            <br/>
            <Button variant='success' onClick={() => setShowDeleteModal((mUV) => !mUV)}>Delete Account</Button>
            {showDeleteModal ? <Delete onSetUser={onSetUser} handleDelete={handleDelete} show={showDeleteModal} setShowDeleteModal={setShowDeleteModal} /> : null}
            {profile ? <ProfileEditModal handleClose={handleClose} profile={profile} onSetProfile={onSetProfile} show={show} handleChange={handleChange} /> : <ProfileEditModal profile={formData} handleClose={handleClose} onSetProfile={onSetProfile} show={show} handleChange={handleChange} />}
          </Col>
        </Row>
        <br />
        <Row>
          <p>{profile ? profile.bio : null}</p>
        </Row>

    </div>
  )
};

export default AccountInfo;