import BrowseSearch from "./BrowseSearch";
import BrowseCards from "./BrowseCards";
import { useEffect, useState } from 'react';

function Browse() {

  //search is variable used for query paramaters in fetch, input is variable from BrowseSearch.js form that sets search
  const [search, setSearch] = useState('')
  //searchedBooks are the fetch return results from search parameters
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [index, setIndex] = useState(0)

  useEffect (() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=${index}&maxResults=24&key=AIzaSyCAzfvCo4D0qLG1hV8WfEYpNC8rhtk7rQY`)
    .then((r) => r.json())
    .then((data) => {
      setSearchedBooks(data)
      //setSearch({})
    })
  }, [search])

  function onSetSearch(input){
    console.log(input)
    let argument = input.keyword
    //add in &orderBy=relevance || &orderBy=newest
    if(input.author !== ''){
      console.log(argument)
      argument = argument + '+inauthor:' + input.author
    }
    setSearch(argument.replace(/ /g, '+'))
  }
  
  return (
    <div style={{ margin: '50px' }}>
      <BrowseSearch onSetSearch={onSetSearch} search={search} />
        <div style={{ marginTop: '50px' }}>
          <BrowseCards books={searchedBooks} />
          {/* click for the next 40?? */}
        </div>
    </div>
  )
};

export default Browse;