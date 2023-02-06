import { useState, useEffect } from 'react';
import MyShelfFilter from './MyShelfFilter';
//import MyShelfSearch from './MyShelfSearch';
import MyShelfCards from './MyShelfCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function MyShelf({ user, userBooks, onSetUserBooks, onDeleteUserBook, categories, ages }) {
  
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState([]);

  // function onSetFiltered(filter){
  //   setFiltered(filter)
  // }

  // function handleFilterSubmit(e){
  //   e.preventDefault();
  //   debugger;
  //   setOpen((mUV)=> !mUV)
  // }

  return (
    <div style={{ margin: '50px' }}>
      <div style={{ margin: '1em' }}>
        <Row>
          {!user.id ? <Col><p>Please sign in</p></Col> : <>{userBooks.length === 0 ? <Col><p>You have no books saved to MyShelf</p></Col> : null}</>}
        </Row>
        {!userBooks ? null : 
        <MyShelfCards userBooks={userBooks} filtered={filtered} ages={ages} categories={categories} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} /> }
      
      </div>
    </div>
  )
};

export default MyShelf;