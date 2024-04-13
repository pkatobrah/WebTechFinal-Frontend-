import React from 'react'
import { BookProvider } from '../components/BookContext'
import ExchangeRequest  from '../components/ExchangeRequest';

function BookExchange() {
  return (
    <div>
        <BookProvider>
            <div className='flex flex-col justify-center align-middle mt-12 p-12'>
                <div className='flex flex-col justify-center align-middle text-center'>
                    <h1 className="text-4xl font-bold mb-8">Book Exchange</h1>
                    <p className="text-lg mb-4">
                        Book Exchange is a platform where you can exchange books.

                    </p>
        <ExchangeRequest />

                </div>
            </div>
        </BookProvider>
    </div>
  )
}

export default BookExchange