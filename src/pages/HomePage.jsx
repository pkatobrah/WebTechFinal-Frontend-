import React from 'react'

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Book Exchange!</h1>
      <p className="text-lg m-8">
        Book Exchange is a platform where you can exchange books with others.
        Whether you're looking to declutter your bookshelf or find new reads,
        Book Exchange has got you covered!
      </p>
      <div className="flex space-x-4">
        <a
          href="/mybooks"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          My Books
        </a>
        <a
          href="/bookexchange"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Book Exchange
        </a>
      </div>
    </div>
  )
}

export default HomePage