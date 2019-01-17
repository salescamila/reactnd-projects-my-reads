import React from 'react';
import Book from './book';

function BooksGrid({books, onChangeShelf}) {
  console.log('booksGrid', books);
  return (
    <ol className="books-grid" key={books}>
      {books.map((b, i) => (
        <Book
          item={b}
          key={i}
          onChangeShelf={(book, shelf) => (
            onChangeShelf(book, shelf)
          )}
        />
      ))}
    </ol>
  )
}

export default BooksGrid;