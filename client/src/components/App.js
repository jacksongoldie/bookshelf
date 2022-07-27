import NavBar from './NavBar'
import Home from "./home/Home";
import MyShelf from "./myshelf/MyShelf";
import Browse from './browse/Browse';
import Account from "./account/Account";
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [userBooks, setUserBooks] = useState([])

  function onSetUserBooks(book){
    setUserBooks([book, ...userBooks])
  }

  function onDeleteUserBook(bookId){
    const books = userBooks.filter((book) => book.googleData.google_id !== bookId)
    setUserBooks(books)
  }

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse onSetUserBooks={onSetUserBooks} /> } />
        <Route path='/myshelf' element={<MyShelf userBooks={userBooks} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook}/> } />
        <Route path='/account' element={<Account /> } />
      </Routes>
    </div>
  );
}

export default App;
