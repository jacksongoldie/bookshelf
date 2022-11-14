import { useState, useEffect } from 'react';
import FriendCards from './FriendCards';
import SearchBar from "./SearchBar";

function Friends() {

  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState([])

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

  return (
    <div style={{ margin: '50px' }}>
        <SearchBar searchUsers={searchUsers} />
        <br />
        <p>{errors}</p>
        <FriendCards users={users} />
    </div>
  )
};

export default Friends;