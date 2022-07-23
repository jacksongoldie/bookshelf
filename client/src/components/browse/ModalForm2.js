import Form from 'react-bootstrap/Form';

function ModalForm2({ book, handleChange, modalInfoFromUser, setModalPage }) {
    console.log(book.volumeInfo.maturityRating)
    console.log(modalInfoFromUser.ages)

    const options = ["School Aged Children", "Tweens", "Teens", "Young Adults", "Not Suitable for Children"]

    const matureRatingQuestions = () => {
       return( <>
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
            </Form.Group>
        </>
    )}

    function modalQuestions(){
        switch(book.volumeInfo.maturityRating){
            case "MATURE":
                return matureRatingQuestions();
            case 'NOT_MATURE':
                return (<>
                    <Form.Group className="mb-3" controlId="modalInfoFromUser">
                    <Form.Label>Recommended Reader Ages</Form.Label>
                        <Form.Control as='checkbox' multiple value={modalInfoFromUser.ages} onChange={handleChange} >
                            {options.map((option) => <Form.Check 
                                type="switch"
                                name='ages'
                                key={option}
                                label={option}
                                value={option}
                            />)}
                        </Form.Control>
                        </Form.Group>
                        {modalInfoFromUser.ages.includes('Not Suitable for Children') ?
                        matureRatingQuestions() :
                        null}
                        </>)
            default:
                setModalPage(3);
        }
    }
  return (
    <div>
         <Form.Group className="mb-3" controlId="userData">
            {modalQuestions()}
        </Form.Group>
    </div>
  )
};

export default ModalForm2;