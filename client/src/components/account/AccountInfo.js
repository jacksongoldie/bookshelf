import {useState, useEffect} from 'react';
import account from '../assets/account.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileEditModal from './ProfileEditModal';

function AccountInfo({ user, profile, onSetProfile }) {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false)
    onSetProfile(profile ? profile : {})
  }

  function handleChange(e){
      onSetProfile({...profile, [e.target.name]: e.target.value})
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
            <ProfileEditModal handleClose={handleClose} profile={profile} onSetProfile={onSetProfile} show={show} handleChange={handleChange} />
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