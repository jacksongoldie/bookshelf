import NavBar from './NavBar'
import Home from "./home/Home";
import MyShelf from "./myshelf/MyShelf";
import Browse from './browse/Browse';
import Account from "./account/Account";
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [userBooks, setUserBooks] = useState([])
  const [categories, setCategories] = useState([])
  const [ages, setAges] = useState([])

  useEffect(() => {
    fetch('/members/9/books')
    .then((r) => r.json())
    .then(setUserBooks)

    fetch('/categories')
    .then((r) => r.json())
    .then(setCategories)

    fetch('/ages')
    .then((r) => r.json())
    .then(setAges)
  }, [])
  
  function onSetUserBooks(book){
    debugger
    setUserBooks([book, ...userBooks])
  }

  function onDeleteUserBook(bookId){
    const books = userBooks.filter((book) => book.google_id !== bookId)
    setUserBooks(books)
  }

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse onSetUserBooks={onSetUserBooks} userBooks={userBooks} categories={categories} ages={ages} /> } />
        <Route path='/myshelf' element={<MyShelf userBooks={userBooks} ages={ages} categories={categories} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook}/> } />
        <Route path='/account' element={<Account /> } />
      </Routes>
    </div>
  );
}

export default App;
