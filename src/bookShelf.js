import React from 'react';
import BooksGrid from './booksGrid';

function BookShelf() {
  return(
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <BooksGrid />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookShelf;