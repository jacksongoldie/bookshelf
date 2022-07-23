import Form from 'react-bootstrap/Form';

function ModalForm3({ handleChange, userReview}) {

  return (
    <div>
        <Form.Group className="mb-3" controlId="review">
            <Form.Label>Review</Form.Label>
                <Form.Control type="textarea" name='text' value={userReview.text} onChange={handleChange} />
        <Form.Label>Rate</Form.Label>
                    <Form.Control type="range" className="form-range" min={1} max={5} name='rate' value={userReview.rate} onChange={handleChange} />
                    <Form.Label>{userReview.rate}</Form.Label>
        </Form.Group>
    </div>
  )
};

export default ModalForm3;