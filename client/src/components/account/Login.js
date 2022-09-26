import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function Login({ onSetUser,  resetAccountPage, setShowSignUpForm }) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)

    function handleSubmit(e){
        e.preventDefault();
        console.log('form submit', formData)
        fetch(`/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: formData
            }),
          }).then((res) => {
            if (res.ok) {
              localStorage.setItem("token", res.headers.get("Authorization"));
              return res.json();
            } else {
              return res.text().then((text) => Promise.reject(text));
            }
          })
          .then((json) => onSetUser(json.data))
          .catch((err) => setError(err))
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
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" name='password' value={formData.password} onChange={handleChange} />
                {error ? <p>{error}</p> : null}
            </Form.Group>
            <Form.Group>
            <Button variant="success" type="submit">
                Login
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
};

export default Login;