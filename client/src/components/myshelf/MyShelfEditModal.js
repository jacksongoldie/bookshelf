import Modal from 'react-bootstrap/Modal';
import defaultPhoto from '../assets/booksPhoto.jpg';
import Button from 'react-bootstrap/Button';
import MyShelfEditForm from './MyShelfEditForm';
import { useState, useEffect } from 'react';


function MyShelfEditModal({ show, handleClose, book, isDeleting, onDeleteUserBook, onSetUserBooks, onSetIsDeleting, categories, ages }) {

    const [userInputsToEdit, setUserInputsToEdit] = useState({})
    const [review, setReview] = useState({
        rate: '',
        text: ''
    })
    //NEEDS TO BE FETCHING OR PROPPING THE BOOK USER INPUTS FOR THIS USER
    useEffect(() => {
        console.log('in useeffect')
        fetch(`/user_inputs/${book.user_input_id}`)
        .then((r) => r.json())
        .then(setUserInputsToEdit)
      }, [])

      function handleChange(e){
        switch(e.target.id){
            // case 'googleData':
            //     setGoogleData({...googleData, [e.target.name]: e.target.value});
            //     break
            case 'userData':
                debugger
                if(e.target.name === 'categories'){
                    if (userInputsToEdit.categories.find((c) => c.name === e.target.value)){
                        const replacementArray = userInputsToEdit.categories.filter((c) => c.name !== e.target.value)
                        console.log(replacementArray)
                        setUserInputsToEdit({...userInputsToEdit, categories: replacementArray})
                    }
                    else{
                        setUserInputsToEdit({...userInputsToEdit, [e.target.name]: [...userInputsToEdit[e.target.name], {id: e.target.key, name: e.target.value}]})
                    }
                }
                else{
                    //get string and split into array elements then save to userInputsToEdit
                    setUserInputsToEdit({...userInputsToEdit, [e.target.name]: e.target.value})
                }
                break
            case 'modalInfoFromUser':
                //debugger;
                if(e.target.name === 'ages'){
                    if (userInputsToEdit.ages.find((a) => a.range === e.target.value)){
                        const replacementArray = userInputsToEdit.ages.filter((age) => age.range !== e.target.value)
                        setUserInputsToEdit({...userInputsToEdit, [e.target.name]: replacementArray})
                    }
                    else{
                        setUserInputsToEdit({...userInputsToEdit, [e.target.name]: [...userInputsToEdit[e.target.name], e.target.value]})
                    }
                }
                else{
                    setUserInputsToEdit({...userInputsToEdit, [e.target.name]: e.target.value})
                }
                break
            case 'review':
                debugger
                setReview({...review, [e.target.name]: e.target.value})
                break
            default:
                return null;
          }
    }

    function handleSubmit(e){
        e.preventDefault();
        const update = {
            spice: userInputsToEdit.spice,
            violence: userInputsToEdit.violence,
            language: userInputsToEdit.language,
            ages: userInputsToEdit.ages,
            categories: userInputsToEdit.categories,
            //tags: userInputsToEdit.tags[0],
            review: review
        }
        fetch(`/user_inputs/${book.user_input_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)})
            .then(r => r.json())
            .then(setUserInputsToEdit)
            handleClose();
        }

    function handleDelete(){
        console.log('in delete')
        //WILL NEED TO CHANGE TO NEW ID
        onDeleteUserBook(book.google_id)
    }

    function handleCancel(){
        handleClose()
        onSetIsDeleting()
    }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {isDeleting ?
        <>
        <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure?
            <Button style={{ margin: '.5em' }}onClick={handleDelete} variant="success">Yes</Button>
            <Button onClick={handleCancel} variant="success">No</Button>
        </Modal.Body>
        </> :
        <>
        <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
                    <Modal.Body>
                    {book.img ? <> <img src={book.img} className="rounded mx-auto d-block" height='80px' alt={book.title + ' thumbnail'} /> </> : <img className="rounded mx-auto d-block" height='80px' src={defaultPhoto} alt='default thumbnail' />}
                    </Modal.Body>
                <Modal.Body>
                    <MyShelfEditForm book={book} userInputsToEdit={userInputsToEdit} review={review} handleChange={handleChange} handleSubmit={handleSubmit} ages={ages} categories={categories} />
                </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={handleClose}> Cancel </Button>
        </Modal.Footer>
        </>
        }
        </Modal>
    </>)
};

export default MyShelfEditModal;