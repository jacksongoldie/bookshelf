import Button from "react-bootstrap/esm/Button";

function BrowsePagination({ books, index, onSetIndex, currentPage, onSetCurrentPage }) {

    function handleForwardClick(){
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
        <Button variant="success" onClick={handleBackClick}>Back</Button></> : null}
        {books === undefined || books.length < 24 ? null : <><h3>Page {currentPage}</h3> 
        <Button variant="success" onClick={handleForwardClick}>Next</Button></>}
    </div>
  )
};

export default BrowsePagination;