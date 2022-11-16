import MyShelfCard from "./MyShelfCard";
import Row from 'react-bootstrap/Row';

function MyShelfCards({ filtered, userBooks, onSetUserBooks, onDeleteUserBook, categories, ages }) {
  

    console.log(filtered)

    // function displayFilteredBooks(){
    //   debugger
    //   if(filtered.length > 0){
        
         
    //     })
    //   }
    //   else{
    //     return userBooks.map((book) => <MyShelfCard book={book} key={book.id} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} ages={ages} categories={categories} />)
    //   }
    // }
    

  return (
    <div>
        <Row xs={1} md={2} lg={3} xl={3}>
          {/* {displayFilteredBooks()} */}
          {userBooks.map((book) => <MyShelfCard book={book} key={book.id} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook} ages={ages} categories={categories} />)}
        </Row>
    </div>
  )
};

export default MyShelfCards;