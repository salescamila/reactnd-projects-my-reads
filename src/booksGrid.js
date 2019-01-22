import React from 'react';
import Book from './book';

/**
 * @description List all the books of a shelf on a grid
 * @constructor
 * @param {object} books
 * @param {function} onChangeShelf
 */
function BooksGrid({books, onChangeShelf}) {
  return (
    <ol className="books-grid" key={books}>
      {books.map((b, i) => (
        <Book
          item={b}
          key={i}
          onChangeShelf={(book, shelf) => (onChangeShelf(book, shelf))}
        />
      ))}
    </ol>
  )
}

export default BooksGrid;