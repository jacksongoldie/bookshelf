import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileEditModal from './ProfileEditModal';

function AccountInfo({ user }) {

  const [profile, setProfile] = useState({
    name: '',
    image: '',
    bio: '',
    likes: 0
  })
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    //LEFT OFF HERE RESET THIS AS A NESTED ROUTE TO GET PROFILE WITH USER ID AND CHANGE PRIVATE METHOD IN CONTROLLER FOR PROFILE
    fetch(`/users/${user.id}/profiles`)
    .then(r => r.json())
    .then(setProfile)
  },[])


  function handleChange(e){
      setProfile({...profile, [e.target.name]: e.target.value})
  }

  function onSetProfile(profile){
    setProfile(profile)
  }

  return (
    <div>
        <Row><h2>Welcome back, {profile.name}!</h2></Row>
        <br/>
        <Row>
          <Col>
          <h3>add image tag bootstrap here {profile.img}</h3>
          </Col>
          <Col>
            <Button onClick={handleShow}>Edit Profile</Button>
            <ProfileEditModal handleClose={handleClose} profile={profile} onSetProfile={onSetProfile} show={show} handleChange={handleChange} />
          </Col>
        </Row>
        <Row>
          <p>{profile.bio}</p>
        </Row>

    </div>
  )
};

export default AccountInfo;