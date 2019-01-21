import React, { Component } from 'react';
import Book from './book';

class SearchBook extends Component {

  state = {
    query: ''
  }

  UpdateQuery = (text) => {
    this.setState(() => ({
      query: text
    }));
    this.props.onSearch(text);
  }

  clearQuery = () => {
    this.UpdateQuery('');
  }

  changeShelf(book, shelf) {
    if (typeof book !== 'undefined') {
      this.props.onChangeShelf(book, shelf);
    }
  }

  getBookShelf(books, bookId){
    let bookTemp = [];

    if (typeof books !== 'undefined' && books.length > 0) {
      bookTemp = books.filter((b) => (b.id === bookId))
    }

    if (bookTemp.length === 0){
      return 'none';
    } else {
      return bookTemp[0].shelf;
    }
  }

  render() {
    const { query } = this.state;
    const { books, booksFound, onCloseSearch } = this.props;

    let showingBooks = [];

    if (query !== '' && typeof booksFound !== 'undefined' && booksFound.length > 0) {
      //Search by Title on the currents shelvies
      /*showingBooks = books.filter((b) => (
        b.title.toLowerCase().includes(query.toLowerCase())
      )); */

      //showingBooks = [...booksFound];

      if (typeof books !== 'undefined' && books.length > 0) {
        showingBooks = booksFound.map((b) => {
          b.shelf = this.getBookShelf(books, b.id);
          return b;
        })
      }
    }

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => onCloseSearch()}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => (this.UpdateQuery(event.target.value))}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {
              typeof books !== 'undefined'
              ? showingBooks.map((b, i) => (
                <Book
                  item={b}
                  key={i}
                  onChangeShelf={(book, shelf) => (
                    this.changeShelf(book, shelf))
                  }
                 /* onChangeShelf={(book, shelf) => (
                    onChangeShelf(book, shelf)
                  )}*/
                /> ))
              : 'No books found'
            }
          </ol>
        </div>
      </div>
    )
  }
};

export default SearchBook;