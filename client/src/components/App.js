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
  const [profile, setProfile] = useState({})

  useEffect(() => {
    fetch('/current_user')
    .then(r => r.json())
    .then((data) => {
      setUser(data)
    })

    fetch('/categories')
    .then((r) => r.json())
    .then(setCategories)

    fetch('/ages')
    .then((r) => r.json())
    .then(setAges)
  }, [])

  useEffect(() => {
    fetch('/books')
    .then((r) => r.json())
    .then(setUserBooks)
  }, [user])

  function onSetUser(user){
    setUser(user)
  } 
  function onSetProfile(profile){
    setProfile(profile)
  }
  
  function onSetUserBooks(book){
    if(!book){
      setUserBooks([])
    }
    else{
      setUserBooks(() => ([book, ...userBooks]))
    }
  }

  function onDeleteUserBook(bookId){
    const books = userBooks.filter((book) => book.id !== bookId)
    setUserBooks(books)
  }

  return (
    <div className="App">
      <NavBar profile={profile} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse user={user} onSetUserBooks={onSetUserBooks} userBooks={userBooks} categories={categories} ages={ages} /> } />
        <Route path='/myshelf' element={<MyShelf user={user} userBooks={userBooks} ages={ages} categories={categories} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook}/> } />
        <Route path='/account' element={<Account user={user} onSetUser={onSetUser} profile={profile} onSetProfile={onSetProfile} onSetUserBooks={onSetUserBooks} /> } />
      </Routes>
    </div>
  );
}

export default App;
