import NavBar from './NavBar'
import Home from "./home/Home";
import MyShelf from "./myshelf/MyShelf";
import Browse from './browse/Browse';
import Account from "./account/Account";
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [userBooks, setUserBooks] = useState([])
  const [user, setUser] = useState({})
  const [categories, setCategories] = useState([])
  const [ages, setAges] = useState([])

  useEffect(() => {
    //fetch(`/members/${user.id}/books`)
    fetch('/books')
    .then((r) => r.json())
    .then(setUserBooks)
    
    fetch('/member-data')
    .then(r => r.json())
    .then(setUser)

    fetch('/categories')
    .then((r) => r.json())
    .then(setCategories)

    fetch('/ages')
    .then((r) => r.json())
    .then(setAges)
  }, [])
console.log(userBooks)
  function onSetUser(user){
    console.log(user)
    debugger
    setUser(user)
  }
  
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
        <Route path='/browse' element={<Browse user={user} onSetUserBooks={onSetUserBooks} userBooks={userBooks} categories={categories} ages={ages} /> } />
        <Route path='/myshelf' element={<MyShelf userBooks={userBooks} ages={ages} categories={categories} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook}/> } />
        <Route path='/account' element={<Account user={user} onSetUser={onSetUser} /> } />
      </Routes>
    </div>
  );
}

export default App;
