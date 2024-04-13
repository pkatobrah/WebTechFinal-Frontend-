// EditBookModal.js
import React, { useState } from 'react';

const EditBookModal = ({ book, index, onClose }) => {
  const [editedBook, setEditedBook] = useState({ ...book });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    
    console.log('Edited Book Details:', editedBook);
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Edit Book</h2>
          <label className="block mb-2">
            Title:
            <input
              type="text"
              name="title"
              value={editedBook.title}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full border-gray-300 rounded-md"
            />
          </label>
          <label className="block mb-2">
            Author:
            <input
              type="text"
              name="author"
              value={editedBook.author}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full border-gray-300 rounded-md"
            />
          </label>
          <label className="block mb-2">
            Description:
            <textarea
              name="description"
              value={editedBook.description}
              onChange={handleInputChange}
              className="form-textarea mt-1 block w-full border-gray-300 rounded-md"
            ></textarea>
          </label>
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Save Changes
            </button>
            <button
              onClick={onClose}
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBookModal;
