import React from 'react';
import BookShelf from './bookShelf'
import './App.css'

function ListBooks() {
  return(
    <div>
      <BookShelf />
      <BookShelf />
      <BookShelf />
      <div className="open-search">
        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
      </div>
    </div>
  )
};

export default ListBooks;