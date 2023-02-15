import { useState, useEffect } from 'react';
import FriendCards from './FriendCards';
import FriendMyShelf from './FriendMyShelf';
import SearchBar from "./SearchBar";

function Friends({ user }) {

  const [users, setUsers] = useState([])
  const [searchedUsers, setSearchedUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState({})
  const [errors, setErrors] = useState([])
  const [books, setBooks] = useState([])

  useEffect(()=> {
    fetch(`https://bookshelf-ghnp.onrender.com/profiles`)
    .then(r => {
      if(r.ok){
        r.json().then((u)=>{
          setUsers(u)
        })
      }
      else{
        r.json().then(setErrors)
      }
    })
  },[])

  function searchUsers(input){
    const newArray = users.filter((u)=> u.name.toLowerCase().includes(input.toLowerCase()))
    if(newArray.length > 0){
      setSearchedUsers(newArray)
    }
    else{
      setSearchedUsers([])
      setErrors(['Hmm. No one here.'])
    }
  }

  function onSetBooks(books, profile){
    setBooks(books)
    setSelectedUser(profile)
  }
  
  return (
    <div style={{ margin: '50px' }}>
    {/* <div style={{ margin: '50px' }}> */}
      {books.length > 0 ? 
      <FriendMyShelf books={books} onSetBooks={onSetBooks} selectedUser={selectedUser} /> :
      <>
      {user.id ? 
        <div style={{ marginTop: '50px' }}>
        <SearchBar setErrors={setErrors} searchUsers={searchUsers} />
        {errors ? <p>{errors}</p> : null}
        <FriendCards users={searchedUsers} onSetBooks={onSetBooks} />
        </div> :
        <p>Please sign in</p>}  
       </> }
      </div>
      
  )
};

export default Friends;