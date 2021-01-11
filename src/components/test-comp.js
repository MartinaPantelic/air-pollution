import React from "react"
            
import BookList from './BookList';
import BookContextProvider from '../context/BookContext';
const testComp = () => {
    return ( 
   <BookContextProvider>
    <BookList />
    </BookContextProvider>
    )    
}

    export default testComp;