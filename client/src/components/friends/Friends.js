import { useState, useEffect } from 'react';
import MyShelf from "../myshelf/MyShelf";
import SearchBar from "./SearchBar";

function Friends() {

  const [users, setUsers] = useState([])
  const [searchedUsers, setSearchedUsers] = useState([])

  useEffect(() => {
    fetch(`/members`)
  }, [])

  return (
    <div style={{ margin: '50px' }}>
        <SearchBar setSearchedUsers={setSearchedUsers} />
    </div>
  )
};

export default Friends;