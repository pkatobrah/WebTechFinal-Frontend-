// AddBook.js
import React, { useState } from 'react';
import { useBookContext } from './BookContext';

const AddBook = () => {
  const { books, setBooks } = useBookContext();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    condition: '',
    description: '',
    coverImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
    setNewBook((prevState) => ({
      ...prevState,
      coverImage: reader.result,
    }));
  };
  if (file) {
    reader.readAsDataURL(file);
  }
  };

  const handleAddBook = () => {
    setBooks([...books, newBook]);
    setNewBook({
      title: '',
      author: '',
      genre: '',
      condition: '',
      description: '',
      coverImage: null,
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
      <input
        type="text"
        name="title"
        value={newBook.title}
        onChange={handleInputChange}
        placeholder="Title"
        className="w-full border rounded-lg p-2 mb-2"
        required
      />
      <input
        type="text"
        name="author"
        value={newBook.author}
        onChange={handleInputChange}
        placeholder="Author"
        className="w-full border rounded-lg p-2 mb-2"
      />
      <input
        type="text"
        name="genre"
        value={newBook.genre}
        onChange={handleInputChange}
        placeholder="Genre"
        className="w-full border rounded-lg p-2 mb-2"
      />
      <input
        type="text"
        name="condition"
        value={newBook.condition}
        onChange={handleInputChange}
        placeholder="Condition"
        className="w-full border rounded-lg p-2 mb-2"
      />
      <input
        type="text"
        name="description"
        value={newBook.description}
        onChange={handleInputChange}
        placeholder="Description"
        className="w-full border rounded-lg p-2 mb-2"
      />

      <input
        type="file"
        onChange={handleImageChange}
        className="w-full border rounded-lg p-2 mb-2"
      />
      <button
        onClick={handleAddBook}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Book
      </button>
    </div>
  );
};

export default AddBook;
