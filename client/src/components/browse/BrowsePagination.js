import Button from "react-bootstrap/esm/Button";

function BrowsePagination({ books, index, onSetIndex, currentPage, onSetCurrentPage }) {
    
    console.log(books)

    function handleForwardClick(){
        console.log(index, currentPage)
        onSetIndex(index + 24)
        onSetCurrentPage(currentPage + 1)
    }

    function handleBackClick(){
        //debugger;
        onSetIndex(index - 24)
        onSetCurrentPage(currentPage - 1)
    }
    
  return (
    <div>
        {currentPage > 1 ? <> 
        <Button onClick={handleBackClick}>Back</Button></> : null}
        {books === undefined || books.length < 24 ? null : <><h3>Page {currentPage}</h3> 
        <Button onClick={handleForwardClick}>Next</Button></>}
    </div>
  )
};

export default BrowsePagination;