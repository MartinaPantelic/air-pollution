import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookList = () => {
 
  const { books } = useContext(BookContext);
 
  return ( 
    <div className="book-list">
      <ul>
        {books.map(book => {
          return (
            <li key={book.id}>{book.title}</li>
          );
        })}
      </ul>
    </div>
  );
}
 
export default BookList;