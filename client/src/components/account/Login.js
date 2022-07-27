import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function Login({ onSetLoggedIn, resetAccountPage }) {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleSubmit(e){
        e.preventDefault();
        console.log('form submit', formData)
        //change for error handling
        onSetLoggedIn()
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name='username' value={formData.username} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" name='password' value={formData.password} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
            <Button variant="success" type="submit">
                Login
            </Button>
            </Form.Group>
        </Form>
        <br />
        <Stack direction='horizontal' gap={2}>
        <Button variant="success">
            Sign Up
        </Button>
        <Button variant="success" onClick={resetAccountPage}>
            Go Back
        </Button>
        </Stack>
        
    </div>
  )
};

export default Login;