import { useState } from 'react';
import account from '../assets/account.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function FriendCard({ profile, onSetBooks }) {

    const [errors, setErrors] = useState('')

    function handleClick(){
        fetch(`/users/${profile.user_id}/user_inputs`)
        .then(r => {
            if(r.ok){
                r.json().then((r) => onSetBooks(r, profile))
            }
            else {
                r.json().then(setErrors('Something went wrong, please make sure you are logged in.'))
            }
        }) 
    } 

  return (
    <div>
    <Col style={{margin:'1em'}}>
        <Card style={{ width: '14em', margin: '2em'}}>
        <Card.Header>
            <Card.Title>{profile.name}</Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Img style={{ height: '20em', width: '12em' }} src={profile.image ? profile.image : account} />
            <Card.Text>{profile.bio}</Card.Text>
            <Button variant="success" onClick={handleClick}>View {profile.name}'s MyShelf</Button>
        </Card.Body>
        {errors ? <p>{errors}</p> : null}
        </Card> 
    </Col>
    </div>
  ) 
};

export default FriendCard;