import MyShelfCard from "./MyShelfCard";

function MyShelfCards({ userBooks }) {
    console.log(userBooks)
    const allUserBooks = userBooks.map((book) => <MyShelfCard book={book} />);

  return (
    <div>
        {allUserBooks}
    </div>
  )
};

export default MyShelfCards;