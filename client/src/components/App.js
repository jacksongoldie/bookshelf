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

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse onSetUserBooks={onSetUserBooks} /> } />
        <Route path='/myshelf' element={<MyShelf userBooks={userBooks} /> } />
        <Route path='/account' element={<Account /> } />
      </Routes>
    </div>
  );
}

export default App;
