import Form from 'react-bootstrap/Form';

function ModalForm1({ handleChange, googleData, userData }) {

    const options = ['lesbian', 'gay', 'bisexual', 'transgender', 'pansexual', 'asexual']

  return (
    <div>
        <>
        <Form.Group className="mb-3" controlId="googleData">
            <Form.Label>Title</Form.Label>
                <Form.Control type="text" name='title' disabled value={googleData.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userData">
            <Form.Label>Main Character Representation</Form.Label>
                <Form.Control as='checkbox' multiple name='categories' value={userData.categories} onChange={handleChange}>
                    {/* {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))} */}
                    {options.map((option) => <Form.Check 
                        type="switch"
                        name='categories'
                        key={option}
                        label={option}
                        value={option}
                    />)}
                </Form.Control>

                {/* <Form.Select class="form-select" multiple name='categories' value={userData.categories} onChange={handleChange} aria-label="multiple select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                {/* <Form.Control type="text" name='categories' value={userData.categories} onChange={handleChange} /> */}
                {/* </Form.Select> */}
            <Form.Label>Tags</Form.Label>
                <Form.Control type="textarea" name='tags' value={userData.tags} onChange={handleChange} />
        </Form.Group>
        </>
    </div>
  )
};

export default ModalForm1;