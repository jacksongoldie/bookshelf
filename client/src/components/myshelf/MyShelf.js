import { useState, useEffect } from 'react';
import MyShelfCards from './MyShelfCards';


function MyShelf({ userBooks }) {

  console.log(userBooks)

  return (
    <div>
      <MyShelfCards userBooks={userBooks} />
    </div>
  )
};

export default MyShelf;