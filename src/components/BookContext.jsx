import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('https://bookexchangeplatform.000webhostapp.com/getbooks.php')
      .then((response) => {
        setBooks(response.data);
      });
    //Runs only on the first render
  }, []);
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};
