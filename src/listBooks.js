import React from 'react';
import BookShelf from './bookShelf';
import './App.css';

function ListBooks({ books, onOpenSearch }) {
  //const { books, onOpenSearch } = this.props;

  const shelfReading = books.filter((book) => {return book.shelf === 'currentlyReading'})
  const shelfToRead = books.filter((book) => {return book.shelf === 'wantToRead'})
  const shelfRead = books.filter((book) => {return book.shelf === 'read'})

  return(
    <div className="list-books-content">
      <BookShelf
        shelfTitle={'Currently Reading'}
        books={shelfReading}/>
      <BookShelf
        shelfTitle={'To Read'}
        books={shelfToRead}/>
      <BookShelf
        shelfTitle={'Read'}
        books={shelfRead}/>
      <div className="open-search">
        <button onClick={() => onOpenSearch()}>Add a book</button>
      </div>
    </div>
  )
}

export default ListBooks;