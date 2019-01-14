import React from 'react'

function Book({item}) {
  return (
    <li key={item.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+item.imageLinks.thumbnail+'")' }}></div>
          <div className="book-shelf-changer">
            <select id='select-status' defaultValue={item.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{item.title}</div>
        {item.authors.map((author, i) => {
          return (<div className="book-authors" key={i}>{author}</div>)
        })}
      </div>
    </li>
  );
};

export default Book;