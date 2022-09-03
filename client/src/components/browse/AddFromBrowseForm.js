import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalForm1 from './ModalForm';
import ModalForm2 from './ModalForm2';
import ModalForm3 from './ModalForm3';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddFromBrowseForm({ book, handleClose, onSetUserBooks, categories, ages }) {
    console.log(book)

    const navigate = useNavigate();

    const [googleData, setGoogleData] = useState({
        google_id: book.id,
        title: book.volumeInfo.title,
        img: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
        mature: book.volumeInfo.maturityRating === 'MATURE' ? true : false
    })
    const [userData, setUserData] = useState({
        categories: [],
        tags: []
    })
    //set category modal questions to empty object and set with name/value??
    const [modalInfoFromUser, setModalInfoFromUser] = useState({
        spice: 0,
        violence: 0,
        language: 0,
        ages: []
    });
    
    //review will create new review for book and user on submit
    const [userReview, setUserReview] = useState({
        text: '',
        rate: 0
    })

    const [modalPage, setModalPage] = useState(1)

    function handleSubmit(e){
        e.preventDefault();
        setModalPage(4)

        const authors = book.volumeInfo.authors ? book.volumeInfo.authors : ['unlisted']

        fetch('/authors', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name: authors})
        })
        .then((r) => r.json())
        .then((a) => {
            const bookToSubmit = {...googleData, book_authors_attributes: a}
            console.log(bookToSubmit)
            debugger;
            fetch('/books', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(bookToSubmit)
            })
            .then((r) => r.json())
            .then((b) => {
                debugger
    //******CHANGE ID HERE********************************************************************* */
                        const userInputs = {
                            user_input_categories_attributes: userData.categories,
                            user_input_tags_attributes: userData.tags.split(' ').map((t) => {return {text: t}}),
                            user_input_ages_attributes: modalInfoFromUser.ages,
                            spice: modalInfoFromUser.spice,
                            violence: modalInfoFromUser.violence,
                            language: modalInfoFromUser.language,
                            book_id: b.id,
                            user_id: 9,
                            review: userReview
                        }
                        fetch(`/user_inputs`,{
                            method: 'POST',
                            headers: {
                                'Content-Type':'application/json'
                            },
                            body: JSON.stringify(userInputs)})
                            .then((r) => r.json())
                            .then((u) => {
                                b.user_inputs.push(u)
                                b.user_input_id = u.id
                                onSetUserBooks(b)
                            })
                        })
                    }
       )
    }
        
        //     review: userReview

    function handleChange(e){
        //determine data group
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
                        const cat = categories.find((c) => c.name === e.target.value)
                        setUserData({...userData, categories: [...userData.categories, cat]})
                    }
                }
                else{
                    //get string and split into array elements then save to userData
                    setUserData({...userData, [e.target.name]: e.target.value})
                }
                break
            case 'modalInfoFromUser':
                if(e.target.name === 'ages'){
                    if (modalInfoFromUser.ages.includes(e.target.value)){
                        const replacementArray = modalInfoFromUser.ages.filter((age) => age !== e.target.value)
                        setModalInfoFromUser({...modalInfoFromUser, [e.target.name]: replacementArray})
                    }
                    else{
                        const age = ages.find((a) => a.range === e.target.value)
                        setModalInfoFromUser({...modalInfoFromUser, ages: [...modalInfoFromUser.ages, age]})
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

    function displayModalForm(){
        //determine data group
        switch(modalPage){
            case 1:
                return <ModalForm1 handleChange={handleChange} categories={categories} googleData={googleData} userData={userData} />
            case 2:
                return <ModalForm2 handleChange={handleChange} setModalPage={setModalPage} modalInfoFromUser={modalInfoFromUser} book={book} ages={ages} />
            case 3:
                return (
                <>
                <ModalForm3 handleChange={handleChange} userReview={userReview} />
                </>
                );
            case 4:
                return(
                <>
                <Button style={{ margin: '.5em' }} variant='success' onClick={handleClose}>Back to Browse</Button><Button variant='success' onClick={() => navigate('/myshelf')}>View on Myshelf</Button>
                </>
                )
            default:
                return <><p>Error, please close the form and try again.</p></>
          }
    }
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            {displayModalForm()}
            {modalPage === 2 ? <><Button variant='success' onClick={() => setModalPage((mUV) => mUV - 1)}> back </Button> <Button variant='success' onClick={() => setModalPage((mUV) => mUV + 1)}> next </Button></>: 
            <>
            {modalPage === 1 ? <Button variant='success' onClick={() => setModalPage((mUV) => mUV + 1)}> next </Button> :
            <>
             {modalPage !== 4 ? <Button variant='success' onClick={() => setModalPage((mUV) => mUV - 1)}> back  </Button>: null}
            </>
            }
            </>
            }
            {modalPage === 3 ? <Button style={{ margin: '.5em'}} variant='success' type='Submit'>Submit</Button> : null}
        </Form>
    </div>
  )
}

export default AddFromBrowseForm;