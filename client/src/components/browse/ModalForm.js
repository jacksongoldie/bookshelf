import Form from 'react-bootstrap/Form';

function ModalForm1({ handleChange, googleData, userData, categories }) {

console.log(categories)
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
                    {categories.map((option) => <Form.Check 
                        type="switch"
                        name='categories'
                        key={option.id}
                        label={option.name}
                        defaultChecked={userData.categories.find((c) => c.id === option.id)}
                        value={option.name}
                    />)}
                </Form.Control>
            <Form.Label>Tags</Form.Label>
                <Form.Control type="textarea" name='tags' value={userData.tags} onChange={handleChange} />
        </Form.Group>
        </>
    </div>
  )
};

export default ModalForm1;