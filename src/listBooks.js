import React, { Component } from 'react';
import BookShelf from './bookShelf';
import './App.css';

class ListBooks extends Component{

  render() {
    const { onOpenSearch } = this.props;

    return(
      <div>
        <BookShelf />
        <BookShelf />
        <BookShelf />
        <div className="open-search">
          <button onClick={() => onOpenSearch()}>Add a book</button>
        </div>
      </div>
    )
  }
};

export default ListBooks;