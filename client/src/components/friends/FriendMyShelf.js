import FriendMyShelfCards from './FriendMyShelfCards';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FriendMyShelf({ selectedUser, books, onSetBooks }) {

  return (
    <div style={{ margin: '50px' }}>
      <Row>
        <Col>
      <h2>{selectedUser.name}'s Myshelf</h2>
      </Col>
      <Col> 
      <Button variant='success' onClick={()=>onSetBooks([])}>Go Back</Button>
      </Col>
      </Row>
        <FriendMyShelfCards books={books} />
    </div>
  )
};

export default FriendMyShelf;