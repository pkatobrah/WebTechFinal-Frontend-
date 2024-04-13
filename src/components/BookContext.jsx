import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const BookContext = createContext();

export function useBookContext() {
  return useContext(BookContext);
}

export function BookProvider ({ children }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('https://bookexchangeplatform.000webhostapp.com/getbooks.php')
      .then((response) => {
        setBooks(response.data);
      });
    
  }, []);
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};
