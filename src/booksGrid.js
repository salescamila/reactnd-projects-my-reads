import React from 'react';
import Book from './book';

function BooksGrid() {
  return (
    <div>
      <ol className="books-grid">
        <Book />
        <Book />
        <Book />
      </ol>
    </div>
  )
}

export default BooksGrid;