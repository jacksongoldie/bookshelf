import Modal from 'react-bootstrap/Modal';
import defaultPhoto from '../assets/booksPhoto.jpg';
import Button from 'react-bootstrap/Button';
import MyShelfEditForm from './MyShelfEditForm';
import { useState, useEffect } from 'react';


function MyShelfEditModal({ show, handleClose, book, isDeleting, onDeleteUserBook, onSetUserBooks, onSetIsDeleting, categories, ages }) {
console.log(book.current_user_input.id)
    const [userInputsToEdit, setUserInputsToEdit] = useState({})

    useEffect(() => {
        console.log('in useeffect')
        fetch(`/user_inputs/${book.current_user_input.id}`)
        .then((r) => r.json())
        .then((data) => setUserInputsToEdit(data))
    }, [])
       //}, [book.current_user_input.id])

      function handleChange(e, controlId){
        switch(controlId){
            case 'userData':
                if(e.target.name === 'categories'){
                    if (userInputsToEdit.categories.find((c) => c.name === e.target.value)){
                        const replacementArray = userInputsToEdit.categories.filter((c) => c.name !== e.target.value)
                        console.log(replacementArray)
                        setUserInputsToEdit({...userInputsToEdit, categories: replacementArray})
                    }
                    else{
                        setUserInputsToEdit({...userInputsToEdit, [e.target.name]: [...userInputsToEdit[e.target.name], {id: e.target.id, name: e.target.value}]})
                    }
                }
                else{
                    setUserInputsToEdit({...userInputsToEdit, [e.target.name]: e.target.value})
                }
                break
            case 'userInputsToEdit':
                if(e.target.name === 'ages'){
                    if (userInputsToEdit.ages.find((a) => a.range === e.target.value)){
                        const replacementArray = userInputsToEdit.ages.filter((age) => age.range !== e.target.value)
                        setUserInputsToEdit({...userInputsToEdit, [e.target.name]: replacementArray})
                    }
                    else{
                        setUserInputsToEdit({...userInputsToEdit, [e.target.name]: [...userInputsToEdit[e.target.name], {id: e.target.id, range: e.target.value}]})
                    }
                }
                else{
                    setUserInputsToEdit({...userInputsToEdit, review: {...userInputsToEdit.review, [e.target.name]: e.target.value}})
                }
                break
            case 'modalInfoFromUser':
                setUserInputsToEdit({...userInputsToEdit, [e.target.name]: e.target.value})
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
            user_input_ages_attributes: userInputsToEdit.ages,
            user_input_categories_attributes: userInputsToEdit.categories,
            //user_input_tags_attributes: userInputsToEdit.tags.length > 0 ? userInputsToEdit.tags.split(' ').map((t) => {return {text: t}}) : [],
            review_attributes: userInputsToEdit.review
        }
        fetch(`/user_inputs/${book.current_user_input.id}`, {
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
      fetch(`/user_inputs/${book.current_user_input.id}`, {
        method: 'DELETE'
      }).then(onDeleteUserBook(book.id))
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
            <Button style={{ margin: '.5em' }} onClick={handleDelete} variant="success">Yes</Button>
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
                    <MyShelfEditForm book={book} userInputsToEdit={userInputsToEdit} handleChange={handleChange} handleSubmit={handleSubmit} ages={ages} categories={categories} />
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