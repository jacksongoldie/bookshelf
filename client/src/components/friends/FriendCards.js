import FriendCard from "./FriendCard";
import Row from 'react-bootstrap/Row';

function FriendCards({ users, onSetBooks }) {

    const cards = users.map((u) => <FriendCard profile={u} key={u.id} onSetBooks={onSetBooks} />)

  return (
    <div>
        <Row xs={1} md={3} lg={4} xl={5}>
        {cards ? cards : null}
        
        </Row>
    </div>
  )
};

export default FriendCards;