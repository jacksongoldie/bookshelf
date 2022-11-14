import { useState } from 'react';
import account from '../assets/account.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FriendMyShelfModal from './FriendMyShelfModal';

function FriendCard({ profile }) {

    const [show, setShow] = useState(false)
    const [errors, setErrors] = useState([])

    function handleClick(){
        fetch(`/users/${profile.id}/books`)
        .then(r => {
            if(r.ok){
                r.json().then((r) => console.log(r))
            }
            else {
                r.json().then(setErrors)
            }
        })   
        debugger
        setShow(true)

    }

  return (
    <div> 
    <Col>
        <Card className="text-center my-3">
        <Card.Header>
            <Card.Title>{profile.name}</Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Img src={profile.image ? profile.image : account} />
            <Card.Text>{profile.bio}</Card.Text>
            <Button variant="success" onClick={handleClick}>View {profile.name}'s MyShelf</Button>
        </Card.Body>
        </Card>
        <FriendMyShelfModal user_id={profile.id} errors={errors} show={show} setShow={setShow} />
    </Col></div>
    //LEAVING OFF HERE WANT TO MAKE SEARCH NON UNIQUE; CLEAR SEARCH AND ERRORS AFTER ENTER
  )
};

export default FriendCard;