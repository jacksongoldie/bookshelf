import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar({ searchUsers, setErrors }) {

    const [input, setInput] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        searchUsers(input)
    }

    function handleChange(e){
        setErrors(null)
        setInput(e.target.value)
    }

  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="keyword">
                <Form.Control type="text" placeholder="Search users by username..." name='input' value={input} onChange={handleChange} />
            </Form.Group>
            <Button variant="success" type="submit">
                Search
            </Button>
        </Form>
    </div>
  )
};

export default SearchBar;