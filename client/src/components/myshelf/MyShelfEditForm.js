import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MyShelfEditForm({ book, categories, userInputsToEdit, ages, handleChange, handleSubmit }) {

  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="googleData">
                <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' disabled value={book.title} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userData">
                <Form.Label>Main Character Representation</Form.Label>
                    <Form.Control as='checkbox' multiple name='categories' value={userInputsToEdit.categories} onChange={(e) => handleChange(e, 'userData')}>
                        {categories.map((option) => <Form.Check 
                            type="switch"
                            name='categories'
                            id={option.id}
                            key={option.id}
                            label={option.name}
                            defaultChecked={userInputsToEdit.categories.find((c) => c.id === option.id)}
                            value={option.name}
                        />)}
                    </Form.Control>
                {/* <Form.Label>Tags</Form.Label>
                    <Form.Control type="textarea" name='tags' value={userInputsToEdit.tags.map((t) => `${t.text} `).join('')} onChange={handleChange} /> */}
            </Form.Group>
            {userInputsToEdit.ages.find((a) => a.range === 'Not for Children') ?
            <>
            <Form.Group className="mb-3" controlId="userInputsToEdit">
            <Form.Label>Recommended Reader Ages</Form.Label>
                <Form.Control as='checkbox' multiple value={userInputsToEdit.ages} onChange={(e) => handleChange(e, 'userInputsToEdit')} >
                    {ages.map((option) => <Form.Check 
                        type="switch"
                        name='ages'
                        id={option.id}
                        label={option.range}
                        defaultChecked={userInputsToEdit.ages.find((a) => a.range === option.range)}
                        value={option.range}
                        key={option.id}
                    />)}
                </Form.Control>
                </Form.Group>
            <Form.Group className="mb-3" controlId="modalInfoFromUser">
            <Form.Label>Spicy Level</Form.Label>
                <Form.Control type="range" className="form-range" min={0} max={3} name='spice' value={userInputsToEdit.spice} onChange={(e)=>handleChange(e, 'modalInfoFromUser')} />
                <Form.Label>{userInputsToEdit.spice}</Form.Label>
                <br />
            <Form.Label>Violence</Form.Label>
                <Form.Control type="range" className="form-range" min={0} max={3} name='violence' value={userInputsToEdit.violence} onChange={(e)=>handleChange(e, 'modalInfoFromUser')} />
                <Form.Label>{userInputsToEdit.violence}</Form.Label>
                <br />
            <Form.Label>Language</Form.Label>
                <Form.Control type="range" className="form-range" min={0} max={3} name='language' value={userInputsToEdit.language} onChange={(e)=>handleChange(e, 'modalInfoFromUser')} />
                <Form.Label>{userInputsToEdit.language}</Form.Label>
            </Form.Group> 
            </>:
            <Form.Group className="mb-3" controlId="userInputsToEdit">
            <Form.Label>Recommended Reader Ages</Form.Label>
                <Form.Control as='checkbox' multiple value={userInputsToEdit.ages} onChange={(e) => handleChange(e, 'userInputsToEdit')} >
                    {ages.map((option) => <Form.Check 
                        type="switch"
                        name='ages'
                        id={option.id}
                        label={option.range}
                        defaultChecked={userInputsToEdit.ages.find((a) => a.id === option.id)}
                        value={option.range}
                        key={option.id}
                    />)}
                </Form.Control>
                </Form.Group>}
            <Form.Group className="mb-3" controlId="userInputsToEdit">
                <Form.Label>Review</Form.Label>
                    <Form.Control type="textarea" class="form-control rounded-0" name='text' value={userInputsToEdit.review.text} onChange={(e)=>handleChange(e, 'userInputsToEdit')} />
                    <Form.Label>Rate</Form.Label>
                    <Form.Control type="range" className="form-range" min={1} max={5} name='rate' value={userInputsToEdit.review.rate} onChange={(e)=>handleChange(e, 'userInputsToEdit')} />
                    <Form.Label>{userInputsToEdit.review.rate}</Form.Label>
            </Form.Group>
            <Button type='Submit' variant='success'> Submit </Button>
        </Form>
    </div>
  )
};

export default MyShelfEditForm;