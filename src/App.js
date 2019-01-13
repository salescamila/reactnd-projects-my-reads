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
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={({ history }) => (
          <ListBooks
            onOpenSearch={() => {
              history.push('/search');
            }}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBook
            onCloseSearch={() => {
              history.push('/');
            }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
