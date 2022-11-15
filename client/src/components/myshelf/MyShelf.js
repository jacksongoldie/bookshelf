//import MyShelfFilter from './MyShelfFilter';
//import MyShelfSearch from './MyShelfSearch';
import MyShelfCards from './MyShelfCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MyShelf({ user, userBooks, onSetUserBooks, onDeleteUserBook, categories, ages }) {


  return (
    <div>
      <div style={{ margin: '1em' }} className="d-flex justify-content-center">
        <Row>
          {!user.id ? <Col><p>Please sign in</p></Col> : <>{userBooks.length === 0 ? <Col><p>You have no books saved to MyShelf</p></Col> : null}</>}
        {/* <Col><MyShelfFilter /> </Col>
        <Col><MyShelfSearch /></Col> */}
        </Row>
      </div>
      <div style={{ margin: '1em' }}>
        {!userBooks ? null : 
        <MyShelfCards userBooks={userBooks} ages={ages} categories={categories} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} /> }
      </div>
    </div>
  )
};

export default MyShelf;