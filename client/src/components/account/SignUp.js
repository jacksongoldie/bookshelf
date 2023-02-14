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
        fetch("/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: formData
        }),
      }).then(r => {
        if(r.ok){
            r.json().then((user) => {
              console.log(user)
                onSetUser(user)
            })
        }
        else{
            r.json().then((err) => {
                setError(err.errors)
            })
        }
    })
    }

    function handleChange(e){
      setError(null)
      setFormData({...formData, [e.target.name]: e.target.value})
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name='email' value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={formData.password} onChange={handleChange} />
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