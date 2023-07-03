import React from 'react'

function Pagination({gotoNextPage, gotoPrevPage}) {
  return (
      <div>
          <button onClick={ gotoPrevPage }>Previous</button>
          <button onClick={gotoNextPage}>Next</button>
    </div>
  )
}

export default Pagination