import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


function SignUp({ onSetUser, resetAccountPage }) {

    const [formData, setFormData] = useState({
    email: '',
    password: ''
    })
    const [error, setError] = useState(null)

    function handleSubmit(e){
        e.preventDefault();
        console.log('in sign up submit')
        fetch("/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: formData
        }),
      })
        .then((res) => {
          if (res.ok) {
            console.log(res.headers.get("Authorization"));
            localStorage.setItem("token", res.headers.get("Authorization"));
            return res.json();
          } else {
            throw new Error(res);
          }
        })
        .then((json) => onSetUser(json.data))
        .catch((err) => setError(err));

        //change for error handling
        //onSetLoggedIn()
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name='email' value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" name='password' value={formData.password} onChange={handleChange} />
                {error ? <p>{error}</p> : null}
            </Form.Group>
            <Form.Group>
            <Button variant="success" type="submit">
                Sign up
            </Button>
            </Form.Group>
        </Form>
        <br />
        <Stack direction='horizontal' gap={2}>
        <Button variant="success" onClick={resetAccountPage}>
            Go Back
        </Button>
        </Stack>
        
    </div>
  )
}

export default SignUp;