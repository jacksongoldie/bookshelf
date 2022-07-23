import SignUp from "./SignUp";
import Login from "./Login";
import AccountInfo from "./AccountInfo";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

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
      <div>
        { loggedIn ? 
        <>
        <AccountInfo />
        <Button variant='success' onClick={() => {setLoggedIn((mUV) => !mUV); resetAccountPage()}}> Logout </Button> 
        </>:
        <>
        {showSignUpForm ? <SignUp onSetLoggedIn={onSetLoggedIn} /> : <Button variant='success' onClick={() => setShowSignUpForm((mUV) => !mUV)}>SignUp</Button>}
        {showLoginForm ? <Login onSetLoggedIn={onSetLoggedIn} resetAccountPage={resetAccountPage} /> : <Button variant='success' onClick={() => setShowLoginForm((mUV) => !mUV)}>Login</Button>}
        </> }
      </div>
    </div>
  )
};

export default Account;