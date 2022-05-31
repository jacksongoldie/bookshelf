import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BrowseSearch({ onSetSearch }) {

    const [input, setInput] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        onSetSearch(input)
    }

    function handleChange(e){
        setInput(e.target.value)
    }

  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="keyword">
                <Form.Label>Keyword</Form.Label>
                <Form.Control type="text" placeholder="Search by keywords..." name='keyword' value={input} onChange={handleChange} />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="success" type="submit">
                Search
            </Button>
        </Form>
    </div>
  )
};

export default BrowseSearch;