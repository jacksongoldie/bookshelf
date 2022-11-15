
import FriendMyShelfCard from "./FriendMyShelfCard";


function FriendMyShelfCards({ books }) {

    const booksToDisplay = books.map((b)=> <FriendMyShelfCard book={b} key={b.id} />)
  return (
    <div>{booksToDisplay}</div>
  )
};

export default FriendMyShelfCards;