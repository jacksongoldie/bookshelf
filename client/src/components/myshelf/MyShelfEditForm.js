import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function MyShelfEditForm({ book, onSetUserBooks }) {
    console.log(book)

    //LEFT OFF HERE GETTING THE FORM CONTROLS SET UP AND FIGURING OUT ERROR
    //WILL NEED TO PUSH STATE FROM OTHER FORM UP, AND BRING DOWN SETTER FNS?? CAN USE STATE FROM BOOK FOR CURRENT VALUES, USE SETTER METHODS IN HANDLECHANGE, 

    const CAT = ['lesbian', 'gay', 'bisexual', 'transgender', 'pansexual', 'asexual']
    const AGES = ["School Aged Children", "Tweens", "Teens", "Young Adults", "Not Suitable for Children"]

    const [googleData, setGoogleData] = useState({
        google_id: book.google_id,
        title: book.title,
        img: book.img ? book.img : null,
        mature: book.mature
    })
    const [userData, setUserData] = useState({
        categories: book.user_input.categories,
        tags: book.user_input.tags
    })
    console.log(userData)
    //set category modal questions to empty object and set with name/value??
    const [modalInfoFromUser, setModalInfoFromUser] = useState({
        spice: book.user_input.spice,
        violence: book.user_input.violence,
        language: book.user_input.violence,
        ages: book.user_input.ages
    });
    
    //review will create new review for book and user on submit
    const [userReview, setUserReview] = useState({
        text: book.review.text,
        rate: book.review.rate
    })

    function handleChange(e){
        switch(e.target.id){
            case 'googleData':
                setGoogleData({...googleData, [e.target.name]: e.target.value});
                break
            case 'userData':
                if(e.target.name === 'categories'){
                    if (userData.categories.includes(e.target.value)){
                        const replacementArray = userData.categories.filter((c) => c !== e.target.value)
                        setUserData({...userData, categories: replacementArray})
                    }
                    else{
                        setUserData({...userData, [e.target.name]: [...userData[e.target.name], e.target.value]})
                    }
                }
                else{
                    //get string and split into array elements then save to userData
                    setUserData({...userData, [e.target.name]: e.target.value})
                }
                break
            case 'modalInfoFromUser':
                //debugger;
                if(e.target.name === 'ages'){
                    if (modalInfoFromUser.ages.includes(e.target.value)){
                        const replacementArray = modalInfoFromUser.ages.filter((age) => age !== e.target.value)
                        setModalInfoFromUser({...modalInfoFromUser, [e.target.name]: replacementArray})
                    }
                    else{
                        setModalInfoFromUser({...modalInfoFromUser, [e.target.name]: [...modalInfoFromUser[e.target.name], e.target.value]})
                    }
                }
                else{
                    setModalInfoFromUser({...modalInfoFromUser, [e.target.name]: e.target.value})
                }
                break
            case 'review' :
                setUserReview({...userReview, [e.target.name]: e.target.value})
                break
            default:
                return null;
          }
    }

    function handleSubmit(e){
        debugger;
        e.preventDefault();
        const book = {
            title: googleData.title,
            img: googleData.img,
            mature: googleData.mature,
            google_id: googleData.id
        }
        // const updatedBook = {
        //     user_input: {
        //         categories: userData.categories,
        //         tags: userData.tags,
        //         ages: modalInfoFromUser.ages,
        //         spice: modalInfoFromUser.spice,
        //         violence: modalInfoFromUser.violence,
        //         language: modalInfoFromUser.language
        //     },
        //     review: userReview
        // }
        
    }
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="googleData">
                <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' disabled value={googleData.title} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userData">
                <Form.Label>Main Character Representation</Form.Label>
                    <Form.Control as='checkbox' multiple name='categories' value={userData.categories} onChange={handleChange}>
                        {CAT.map((option) => <Form.Check 
                            type="switch"
                            name='categories'
                            key={option}
                            label={option}
                            defaultChecked={userData.categories.includes(option)}
                            value={option}
                        />)}
                    </Form.Control>
                <Form.Label>Tags</Form.Label>
                    <Form.Control type="textarea" name='tags' value={userData.tags} onChange={handleChange} />
            </Form.Group>
            {book.mature ?
            <Form.Group className="mb-3" controlId="modalInfoFromUser">
            <Form.Label>Spicy Level</Form.Label>
                <Form.Control type="range" className="form-range" min={1} max={3} name='spice' value={modalInfoFromUser.spice} onChange={handleChange} />
                <Form.Label>{modalInfoFromUser.spice}</Form.Label>
                <br />
            <Form.Label>Violence</Form.Label>
                <Form.Control type="range" className="form-range" min={1} max={3} name='violence' value={modalInfoFromUser.violence} onChange={handleChange} />
                <Form.Label>{modalInfoFromUser.violence}</Form.Label>
                <br />
            <Form.Label>Language</Form.Label>
                <Form.Control type="range" className="form-range" min={1} max={3} name='language' value={modalInfoFromUser.language} onChange={handleChange} />
                <Form.Label>{modalInfoFromUser.language}</Form.Label>
            </Form.Group>:
            <Form.Group className="mb-3" controlId="modalInfoFromUser">
            <Form.Label>Recommended Reader Ages</Form.Label>
                <Form.Control as='checkbox' multiple value={modalInfoFromUser.ages} onChange={handleChange} >
                    {AGES.map((option) => <Form.Check 
                        type="switch"
                        name='ages'
                        key={option}
                        label={option}
                        defaultChecked={modalInfoFromUser.ages.includes(option)}
                        value={option}
                    />)}
                </Form.Control>
                </Form.Group>}
            <Form.Group className="mb-3" controlId="review">
                <Form.Label>Review</Form.Label>
                    <Form.Control type="textarea" name='text' value={userReview.text} onChange={handleChange} />
                    <Form.Label>Rate</Form.Label>
                    <Form.Control type="range" className="form-range" min={1} max={5} name='rate' value={userReview.rate} onChange={handleChange} />
                    <Form.Label>{userReview.rate}</Form.Label>
            </Form.Group>
            <Button type='Submit' variant='success'> Submit </Button>
        </Form>
    </div>
  )
};

export default MyShelfEditForm;