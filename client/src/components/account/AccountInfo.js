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

  function handleDelete(){
    fetch(`https://bookshelf-ghnp.onrender.com/members/${user.id}`,{
      method: 'DELETE'
    })
    .then(onSetUser({}), onSetProfile({}))
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
            <Row>
            <Col>
            <Button variant='success' onClick={handleShow}>Edit Profile</Button>
            </Col>
            <Col>
            <Button variant='success' onClick={() => setShowDeleteModal((mUV) => !mUV)}>Delete Account</Button>
            </Col>
            </Row>
            {showDeleteModal ? <Delete onSetUser={onSetUser} handleDelete={handleDelete} show={showDeleteModal} setShowDeleteModal={setShowDeleteModal} /> : null}
            {profile ? <ProfileEditModal handleClose={handleClose} profile={profile} onSetProfile={onSetProfile} show={show} /> : <ProfileEditModal profile={formData} handleClose={handleClose} onSetProfile={onSetProfile} show={show} />}
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