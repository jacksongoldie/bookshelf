import BrowseSearch from "./BrowseSearch";
import BrowseCards from "./BrowseCards";
import BrowsePagination from "./BrowsePagination";
import { useEffect, useState } from 'react';

function Browse() {

  //search is variable used for query paramaters in fetch, input is variable from BrowseSearch.js form that sets search
  const [search, setSearch] = useState('')
  //searchedBooks are the fetch return results from search parameters
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [index, setIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect (() => {
    console.log(search)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=${index}&maxResults=24&key=AIzaSyCAzfvCo4D0qLG1hV8WfEYpNC8rhtk7rQY`)
    .then((r) => r.json())
    .then((data) => {
      setSearchedBooks(data.items)
      console.log('total items ' + data.totalItems)
    })
  }, [search, index])


  console.log('index ' + index)
  console.log('page ' + currentPage)
  console.log(searchedBooks)

  function onSetSearch(input){
    setSearch(input.replace(/ /g, '+'))
    setCurrentPage(1)
    setIndex(0)
  }

  console.log(search)

  function onSetIndex(newIndex){
    setIndex(newIndex)
  }
  
  function onSetCurrentPage(x){
    setCurrentPage(x)
  }
  
  return (
    <div style={{ margin: '50px' }}>
      <BrowseSearch onSetSearch={onSetSearch} search={search} />
        <div style={{ marginTop: '50px' }}>
          <BrowseCards books={searchedBooks} />
          <BrowsePagination books={searchedBooks} index={index} onSetIndex={onSetIndex} currentPage={currentPage} onSetCurrentPage={onSetCurrentPage} />
        </div>
    </div>
  )
};

export default Browse;