import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MyShelfFilter({ categories, onSetFiltered, filtered, handleFilterSubmit }) {

  function handleChange(e){
    if(filtered.find((c) => c === e.target.id)){
      onSetFiltered(filtered.filter((c) => c !== e.target.id))
    }
    else{
      onSetFiltered([...filtered, e.target.id])
    }
  }
  return (
    <div>
      <Form onSubmit={handleFilterSubmit}>
            <Form.Group  controlId="filter">
            <Form.Control as='checkbox' multiple name='categories' value={categories} onChange={(e) => handleChange(e)}>
                        {categories.map((option) => <Form.Check 
                            type="switch"
                            name='categories'
                            id={option.id}
                            key={option.id}
                            label={option.name}
                            defaultChecked={filtered.find((c) => c.id === option.id)}
                            value={option.name}
                        />)}
                    </Form.Control>
            </Form.Group>
            <Button variant='success' style={{ margin: '.3em' }} type='Submit'>Apply</Button>
        </Form>
    </div>
  )
};

export default MyShelfFilter;