import {useEffect, useState} from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileEditModal from './ProfileEditModal';

function AccountInfo({ user, profile, onSetProfile }) {
  console.log(user, profile)

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    //LEFT OFF HERE RESET THIS AS A NESTED ROUTE TO GET PROFILE WITH USER ID AND CHANGE PRIVATE METHOD IN CONTROLLER FOR PROFILE
    fetch(`/users/${user.id}/profiles`)
    .then(r => r.json())
    .then(onSetProfile)
  },[])


  function handleChange(e){
      onSetProfile({...profile, [e.target.name]: e.target.value})
  }

  return (
    <div>
        <Row><h2>Welcome back, {profile.name}!</h2></Row>
        <br/>
        <Row>
          <Col>
          <Image fluid thumbnail src={profile.image} alt="profile" width={'150px'}/>
          </Col>
          <Col>
            <Button onClick={handleShow}>Edit Profile</Button>
            <ProfileEditModal handleClose={handleClose} profile={profile} onSetProfile={onSetProfile} show={show} handleChange={handleChange} />
          </Col>
        </Row>
        <br />
        <Row>
          <p>{profile.bio}</p>
        </Row>

    </div>
  )
};

export default AccountInfo;