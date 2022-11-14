import FriendCard from "./FriendCard";

function FriendCards({ users }) {

    const card = users.map((u) => <FriendCard profile={u} key={u.id} />)
  return (
    <div>
        <h2>FriendCards</h2>
        {card}
    </div>
  )
};

export default FriendCards;