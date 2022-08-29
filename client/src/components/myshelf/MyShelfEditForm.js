import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

function MyShelfEditForm({ book, categories, userInputsToEdit, ages, handleChange, review, handleSubmit }) {

    // const [googleData, setGoogleData] = useState({
    //     google_id: book.google_id,
    //     title: book.title,
    //     img: book.img ? book.img : null,
    //     mature: book.mature
    // })
    // const [userData, setUserData] = useState({
    //     categories: userInputsToEdit.categories,
    //     tags: userInputsToEdit.tags
    // })
    // //set category modal questions to empty object and set with name/value??
    // const [modalInfoFromUser, setModalInfoFromUser] = useState({
    //     spice: userInputsToEdit.spice,
    //     violence: userInputsToEdit.violence,
    //     language: userInputsToEdit.violence,
    //     ages: userInputsToEdit.ages
    // });
    
    // //review will create new review for book and user on submit
    // const [userReview, setUserReview] = useState({
    //     text: userInputsToEdit.text,
    //     rate: userInputsToEdit.rate
    // })


        
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="googleData">
                <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' disabled value={book.title} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userData">
                <Form.Label>Main Character Representation</Form.Label>
                    <Form.Control as='checkbox' multiple name='categories' value={userInputsToEdit.categories} onChange={handleChange}>
                        {categories.map((option) => <Form.Check 
                            type="switch"
                            name='categories'
                            key={option.id}
                            label={option.name}
                            defaultChecked={userInputsToEdit.categories.find((c) => c.id === option.id)}
                            value={option.name}
                        />)}
                    </Form.Control>
                {/* <Form.Label>Tags</Form.Label>
                    <Form.Control type="textarea" name='tags' value={userInputsToEdit.tags[0].text} onChange={handleChange} /> */}
            </Form.Group>
            {book.mature ?
            <Form.Group className="mb-3" controlId="modalInfoFromUser">
            <Form.Label>Spicy Level</Form.Label>
                <Form.Control type="range" className="form-range" min={1} max={3} name='spice' value={userInputsToEdit.spice} onChange={handleChange} />
                <Form.Label>{userInputsToEdit.spice}</Form.Label>
                <br />
            <Form.Label>Violence</Form.Label>
                <Form.Control type="range" className="form-range" min={1} max={3} name='violence' value={userInputsToEdit.violence} onChange={handleChange} />
                <Form.Label>{userInputsToEdit.violence}</Form.Label>
                <br />
            <Form.Label>Language</Form.Label>
                <Form.Control type="range" className="form-range" min={1} max={3} name='language' value={userInputsToEdit.language} onChange={handleChange} />
                <Form.Label>{userInputsToEdit.language}</Form.Label>
            </Form.Group>:
            <Form.Group className="mb-3" controlId="userInputsToEdit">
            <Form.Label>Recommended Reader Ages</Form.Label>
                <Form.Control as='checkbox' multiple value={userInputsToEdit.ages} onChange={handleChange} >
                    {ages.map((option) => <Form.Check 
                        type="switch"
                        name='ages'
                        key={option.id}
                        label={option.range}
                        defaultChecked={userInputsToEdit.ages.find((a) => a.id === option.id)}
                        value={option.range}
                    />)}
                </Form.Control>
                </Form.Group>}
            <Form.Group className="mb-3" controlId="review">
                <Form.Label>Review</Form.Label>
                    <Form.Control type="textarea" name='text' value={review.text} onChange={handleChange} />
                    <Form.Label>Rate</Form.Label>
                    <Form.Control type="range" className="form-range" min={1} max={5} name='rate' value={review.rate} onChange={handleChange} />
                    <Form.Label>{review.rate}</Form.Label>
            </Form.Group>
            <Button type='Submit' variant='success'> Submit </Button>
        </Form>
    </div>
  )
};

export default MyShelfEditForm;