import { useState, useEffect } from 'react';
import FriendCards from './FriendCards';
import FriendMyShelf from './FriendMyShelf';
import SearchBar from "./SearchBar";

function Friends({ user }) {

  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState({})
  const [errors, setErrors] = useState([])
  const [books, setBooks] = useState([])

  useEffect(()=> {
    fetch(`/profiles`)
    .then(r => {
      if(r.ok){
        r.json().then(setUsers)
      }
      else{
        r.json().then(setErrors)
      }
    })
  },[])

  function searchUsers(input){
    setErrors([])
    const newArray = users.filter((u)=> u.name.toLowerCase().includes(input.toLowerCase()))
    if(newArray.length > 0){
      setUsers(newArray)
    }
    else{
      setUsers([])
      setErrors(['Hmm. No one here.'])
    }
  }

  function onSetBooks(books, profile){
    setBooks(books)
    setSelectedUser(profile)
  }
console.log(selectedUser)
  return (
    <div style={{ margin: '50px' }}>
    <div>
    {/* <div style={{ margin: '50px' }}> */}
      {books.length > 0 ? 
      <FriendMyShelf books={books} onSetBooks={onSetBooks} selectedUser={selectedUser} /> :
      <>
      {user.id ? 
        <div style={{ marginTop: '50px' }}>
        <SearchBar searchUsers={searchUsers} />
        <FriendCards users={users} onSetBooks={onSetBooks} />
        </div> :
        <p>Please sign in</p>}  
       </> }
      </div>
      </div>
      
  )
};

export default Friends;