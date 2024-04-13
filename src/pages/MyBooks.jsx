import React from 'react'
import AddBook from '../components/AddBook'
import { BookProvider } from '../components/BookContext'
import DisplayBooks from '../components/DisplayBooks'


function MyBooks() {
  return (
    <BookProvider>
    <div className='flex flex-col justify-center align-middle mt-12 p-12'>
        <div className='flex flex-col text-center'>
            <h1 className="text-4xl font-bold mb-8">My Books</h1>
            <p className="text-lg mb-4">
                My Books is a platform where you can manage your own books.
                You can add, remove, and edit books.
            </p>
            <DisplayBooks />
            <AddBook/>

        </div>
    </div>
</BookProvider>
  )
}

export default MyBooks

