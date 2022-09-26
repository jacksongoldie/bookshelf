import SignUp from "./SignUp";
import Login from "./Login";
import AccountInfo from "./AccountInfo";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Account({ onSetUser, user }) {
  console.log(user.id ? 'true' : 'false')
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);



  function resetAccountPage(){
    setShowLoginForm(false)
    setShowSignUpForm(false)
  }
  
  function handleLogout(){
    fetch("/logout", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((json) => Promise.reject(json));
    }
  })
  .then((json) => {
    console.dir(json);
  })
  .catch((err) => console.error(err));
  onSetUser({})
  }
  return (
    <div>
      <div style={{ margin: '50px'}}>
        <Row className="justify-content-center">
        { user.id ? 
        <>
        <Col md='auto'>
        <AccountInfo user={user} />
        <Button style={{ margin:'.5em' }} size='lg' variant='success' onClick={() => {handleLogout(); resetAccountPage()}}> Logout </Button>
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
    </div>
  )
};

export default Account;