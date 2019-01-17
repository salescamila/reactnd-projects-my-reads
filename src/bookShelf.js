import React from 'react';
import BooksGrid from './booksGrid';

function BookShelf({shelfTitle, books, onChangeShelf}) {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <BooksGrid
          books={books}
          onChangeShelf={(book, shelf) => (
            onChangeShelf(book, shelf)
          )}
        />
      </div>
    </div>
  )
}

export default BookShelf;