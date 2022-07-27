import SignUp from "./SignUp";
import Login from "./Login";
import AccountInfo from "./AccountInfo";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Account() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  function onSetLoggedIn(){
    setLoggedIn((mUV => !mUV))
  }

  function resetAccountPage(){
    setLoggedIn(false)
    setShowLoginForm(false)
    setShowSignUpForm(false)
  }
  
  return (
    <div>
      <div style={{ margin: '50px'}}>
        <Row className="justify-content-center">
        { loggedIn ? 
        <>
        <Col md='auto'>
        <AccountInfo />
        <Button style={{ margin:'.5em' }} size='lg' variant='success' onClick={() => {setLoggedIn((mUV) => !mUV); resetAccountPage()}}> Logout </Button>
        </Col>
        </>:
        <>
        <Col md='auto'>
        {showSignUpForm ? <SignUp onSetLoggedIn={onSetLoggedIn} /> : <Button style={{ margin:'.5em' }} size='lg' variant='success' onClick={() => setShowSignUpForm((mUV) => !mUV)}>SignUp</Button>}
        {showLoginForm ? <Login onSetLoggedIn={onSetLoggedIn} resetAccountPage={resetAccountPage} /> : <Button style={{ margin:'.5em' }} size='lg' variant='success' onClick={() => setShowLoginForm((mUV) => !mUV)}>Login</Button>}
        </Col>
        </> }
        </Row>
      </div>
    </div>
  )
};

export default Account;