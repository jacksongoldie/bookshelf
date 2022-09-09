import Form from 'react-bootstrap/Form';

function ModalForm2({ book, handleChange, modalInfoFromUser, setModalPage, ages }) {
    console.log(book.volumeInfo.maturityRating)
    console.log(modalInfoFromUser.ages)


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
console.log(modalInfoFromUser.ages)
    function modalQuestions(){
        switch(book.volumeInfo.maturityRating){
            case "MATURE":
                return matureRatingQuestions();
            case 'NOT_MATURE':
                return (<>
                    <Form.Group className="mb-3" controlId="modalInfoFromUser">
                    <Form.Label>Recommended Reader Ages</Form.Label>
                        <Form.Control as='checkbox' multiple value={modalInfoFromUser.ages} onChange={handleChange} >
                            {ages.map((option) => <Form.Check 
                                type="switch"
                                name='ages'
                                key={option.id}
                                label={option.range}
                                defaultChecked={modalInfoFromUser.ages.find((a) => a.id === option.id)}
                                value={option.range}
                            />)}
                        </Form.Control>
                        </Form.Group>
                        {modalInfoFromUser.ages.find((a) => a.range === 'Not Suitable for Children') ?
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