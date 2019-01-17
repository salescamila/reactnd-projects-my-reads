import React from 'react';
import * as BooksAPI from './utils/BooksAPI'
import './App.css';
import { Route } from 'react-router-dom';
import SearchBook from './searchBook';
import ListBooks from './listBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
        console.log('books', books);
      });
  }

  search(query) {
    if (query !== '') {
      BooksAPI.search(query)
        .then((books) => {
          this.setState(() => ({
            books
          }))
          console.log('books', books);
        });
    }
  }

  updateBook(book, shelf) {
    console.log('Book', book.title);
    console.log('Shelf', book.shelf);
    console.log('Updated to', shelf);
    BooksAPI.update(book, shelf)
      .then(this.getBooks());
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={({ history }) => (
          <ListBooks
            books={this.state.books}
            onOpenSearch={() => {
              history.push('/search');
              this.getBooks();
            }}
            onChangeShelf={(book, shelf) => (
              this.updateBook(book, shelf)
            )}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBook
            books={this.state.books}
            onSearch={(query) => {
              this.search(query);
            }}
            onCloseSearch={() => {
              history.push('/');
            }}
            onChangeShelf={(book, shelf) => (
              this.updateBook(book, shelf)
            )}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
