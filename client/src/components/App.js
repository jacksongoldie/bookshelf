import NavBar from './NavBar'
import Home from "./home/Home";
import MyShelf from "./myshelf/MyShelf";
import Browse from './browse/Browse';
import Account from "./account/Account";
import Friends from './friends/Friends';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [userBooks, setUserBooks] = useState([])
  const [user, setUser] = useState({})
  const [categories, setCategories] = useState([])
  const [ages, setAges] = useState([])
  const [profile, setProfile] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/current_user')
    .then(r => r.json())
    .then((data) => {
      setUser(data)
      fetch(`users/${data.id}/books`)
      .then((r) => r.json())
      .then(setUserBooks, setIsLoading(false))
    })

    fetch('/categories')
    .then((r) => r.json())
    .then(setCategories)

    fetch('/ages')
    .then((r) => r.json())
    .then(setAges)
  }, [])

  useEffect(()=> {
    fetch(`users/${user.id}/profiles/show`)
    .then(r => {
      if(r.ok){
        r.json().then(onSetProfile)
      }
    })

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
    else if(userBooks.find((b)=>b.id === book.id)){
      const update = userBooks.map((b) => {
        if(b.id === book.id){
          return book
        }
        else{
          return b
        }
      })
      setUserBooks(update)
    }
    else{
      setUserBooks(() => ([book, ...userBooks]))
    }
  }

  function filterUserBooks(newBooks){
    setUserBooks(newBooks)
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
        <Route path='/myshelf' element={<MyShelf user={user} userBooks={userBooks} ages={ages} categories={categories} filterUserBooks={filterUserBooks} onSetUserBooks={onSetUserBooks} onDeleteUserBook={onDeleteUserBook}/> } />
        <Route path='/account' element={<Account isLoading={isLoading} user={user} onSetUser={onSetUser} profile={profile} onSetProfile={onSetProfile} setUserBooks={setUserBooks} onSetUserBooks={onSetUserBooks} /> } />
        <Route path='/friends' element={<Friends user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
