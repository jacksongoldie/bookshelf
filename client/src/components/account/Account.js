import SignUp from "./SignUp";
import Login from "./Login";
import AccountInfo from "./AccountInfo";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Account({ isLoading, onSetUser, user, onSetUserBooks, profile, onSetProfile }) {

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [error, setError] = useState('')

  function resetAccountPage(){
    setShowLoginForm(false)
    setShowSignUpForm(false)
  }
  
  function handleLogout(){
    fetch("/logout", {
    method: "DELETE",
    headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.token
  },
})
  .then((res) => {;
    if (res.ok) {
      return res.json();
    } else {
      const json = res.json();
      return Promise.reject(json);
    }
  })
  .then((json) => {
    console.dir(json)
    onSetUser({})
    onSetUserBooks()
    onSetProfile({})
  })
  .catch((err) => setError(err));
  }
  return (
    <div>
      <div style={{ margin: '50px'}}>
      <Row className="justify-content-center">
      { user.id ? 
      <>
      <Col md='auto'>
      <AccountInfo user={user} onSetUser={onSetUser} profile={profile} onSetProfile={onSetProfile} />
      <Button style={{ margin:'.5em' }} size='lg' variant='success' onClick={handleLogout}> Logout </Button>
      </Col>
      </>:
      <>
      <Col md='auto'>
      {showSignUpForm ? <SignUp onSetUser={onSetUser} resetAccountPage={resetAccountPage} /> : <>{!showLoginForm ? <Button style={{ margin:'.5em' }} size='lg' variant='success' onClick={() => setShowSignUpForm((mUV) => !mUV)}>SignUp</Button> : null}</>}

      {showLoginForm ? <Login onSetUser={onSetUser} resetAccountPage={resetAccountPage} setShowSignUpForm={setShowSignUpForm} /> : <> {!showSignUpForm ? <Button style={{ margin:'.5em' }} size='lg' variant='success' onClick={() => setShowLoginForm((mUV) => !mUV)}>Login</Button> : null}</>}
      </Col>
      </>}
      </Row>
    </div>
      
      
      {error ? <p>{error}</p> : null}
    </div>
  )
};

export default Account;