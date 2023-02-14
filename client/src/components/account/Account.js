import SignUp from "./SignUp";
import Login from "./Login";
import AccountInfo from "./AccountInfo";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Account({ setUserBooks, onSetUser, user, onSetUserBooks, profile, onSetProfile }) {

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
  .then((res) => {
    if (res.ok) {
      res.json().then(
      onSetUser({}),
      onSetUserBooks([]),
      onSetProfile({}));
    } else {
      setError('Hmm. Something went wrong.')
    }
  })
  //SOMETHING ISN'T RIGHT HERE - TRY REPLACING IF/ELSE ABOVE AND MOVE THE BELOW .THEN
  // .then(
  //   onSetUser({}),
  //   onSetUserBooks([]),
  //   onSetProfile({}))
  //.catch((err) => setError(err));
  }
  return (
    <div style={{ margin: '50px'}}>
      <div style={{ margin: '1em' }} className="d-flex justify-content-center">
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

      {showLoginForm ? <Login onSetUser={onSetUser} setUserBooks={setUserBooks} resetAccountPage={resetAccountPage} /> : <> {!showSignUpForm ? <Button style={{ margin:'.5em' }} size='lg' variant='success' onClick={() => setShowLoginForm((mUV) => !mUV)}>Login</Button> : null}</>}
      </Col>
      </>}
      </Row>
    </div>
      
      
      {error ? <p>{error}</p> : null}
    </div>
  )
};

export default Account;