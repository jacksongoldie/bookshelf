import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function Login({ setUserBooks, onSetUser, resetAccountPage }) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)

    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://bookshelf-ghnp.onrender.com/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: formData
            }),
          }).then(async (res) => {
            if (res.ok) {
              localStorage.setItem("token", res.headers.get("Authorization"));
              return res.json();
            } else {
              const text = await res.text();
              return await Promise.reject(text);
            }
          })
          .then((json) => {onSetUser(json.data)
          fetch(`https://bookshelf-ghnp.onrender.com/users/${json.data.id}/books`)
          .then((r) => r.json())
          .then(setUserBooks)})
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
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={formData.password} onChange={handleChange} />
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