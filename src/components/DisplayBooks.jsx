import React, { useState } from "react";
import placeholderImage from "../plcimg.jpg"; 
import { useBookContext } from "./BookContext";
import EditBookModal from "./EditBookModal"; 

const DisplayBooks = () => {
  const { books, setBooks } = useBookContext();
  const [expandedBook, setExpandedBook] = useState(null);
  const [editingBookIndex, setEditingBookIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedBook(index === expandedBook ? null : index);
  };

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const handleEdit = (index) => {
    setEditingBookIndex(index);
  };

  const handleUpdate = (index, updatedBook) => {
    const updatedBooks = [...books];
    updatedBooks[index] = updatedBook;
    setBooks(updatedBooks);
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden relative"
        >
          <img
            src={book.coverImage ? book.coverImage : placeholderImage}
            alt="Book Cover"
            className="w-full h-56 object-cover"
          />
          <div className="absolute top-0 right-0 p-2">
            <button
              onClick={() => handleEdit(index)}
              className="text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700 ml-2"
            >
              Delete
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-600 mb-2">Author: {book.author}</p>
            {/* Toggle display of additional details when expanded */}
            {expandedBook === index && (
              <div>
                <p className="mt-2">{book.description}</p>
                <p className="mt-2">Genre: {book.genre}</p>
                <p className="mt-2">Conditon: {book.condition}</p>
                <button
                  onClick={() => handleExpand(null)}
                  className="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            )}
            {/* Display expand button if not expanded */}
            {expandedBook !== index && (
              <button
                onClick={() => handleExpand(index)}
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                Expand
              </button>
            )}
          </div>
        </div>
      ))}
      {/* Modal for editing book details */}
      {editingBookIndex !== null && (
        <EditBookModal
          book={books[editingBookIndex]}
          index={editingBookIndex}
          onUpdate={(updatedBook) => handleUpdate(editingBookIndex, updatedBook)}
          onClose={() => setEditingBookIndex(null)}
        />
      )}
    </div>
  );
};

export default DisplayBooks;
