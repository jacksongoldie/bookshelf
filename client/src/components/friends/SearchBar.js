import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar({ setSearchedUsers }) {

    const [input, setInput] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
    }

  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="keyword">
                <Form.Control type="text" placeholder="Search users by username..." name='input' value={input} onChange={(e)=>setInput(e.target.value)} />
            </Form.Group>
            <Button variant="success" type="submit">
                Search
            </Button>
        </Form>
    </div>
  )
};

export default SearchBar;