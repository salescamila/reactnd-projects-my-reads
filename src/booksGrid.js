import React from 'react';
import Book from './book';

function BooksGrid({books}) {
  console.log('booksGrid', books);
  return (
    <ol className="books-grid" key={books}>
      {books.map((b, i) => (
        <Book item={b}/>
      ))}
    </ol>
  )
}

export default BooksGrid;