import React, { useState } from 'react';
import { useBookContext } from './BookContext';

const ExchangeRequest = () => {
  const { books } = useBookContext();
  const [selectedBookIndex, setSelectedBookIndex] = useState(-1);
  const [message, setMessage] = useState('');
  const [incomingRequests, setIncomingRequests] = useState([]);

  const handleSelectBook = (index) => {
    setSelectedBookIndex(index);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendRequest = () => {
    if (selectedBookIndex !== -1) {
      const selectedBook = books[selectedBookIndex];
      const request = {
        book: selectedBook,
        message: message,
        status: 'pending',
      };
      setIncomingRequests([...incomingRequests, request]);
      setSelectedBookIndex(-1);
      setMessage('');
    } else {
      console.log('Please select a book');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Exchange Requests</h2>
      <div className="mb-4">
        <select
          value={selectedBookIndex}
          onChange={(e) => handleSelectBook(parseInt(e.target.value))}
          className="w-full border rounded-lg p-2 mb-2"
        >
          <option value={-1}>Select a book for exchange</option>
          {books.map((book, index) => (
            <option key={index} value={index}>
              {book.title} by {book.author}
            </option>
          ))}
        </select>
        <textarea
          value={message}
          onChange={handleInputChange}
          placeholder="Enter your message"
          className="w-full border rounded-lg p-2 mb-2"
        ></textarea>
        <button
          onClick={handleSendRequest}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Request
        </button>
      </div>

      <h3 className="text-xl font-bold mb-2">Incoming Requests</h3>
      {incomingRequests.map((request, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h4 className="text-lg font-semibold mb-2">{request.book.title}</h4>
          <p className="text-gray-600 mb-2">Message: {request.message}</p>
          <div>
            {request.status === 'pending' && (
              <div className="flex">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Accept
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Reject
                </button>
              </div>
            )}
            {request.status === 'accepted' && (
              <p className="text-green-500 font-semibold">Request accepted</p>
            )}
            {request.status === 'rejected' && (
              <p className="text-red-500 font-semibold">Request rejected</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExchangeRequest;
