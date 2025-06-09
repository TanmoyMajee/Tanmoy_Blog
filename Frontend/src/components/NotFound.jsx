import React from 'react'
import { Link } from 'react-router-dom' // Assuming you are using React Router for navigation

function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-600 text-white p-4'>
      <h1 className='text-6xl font-bold text-red-500 mb-4'>404</h1>
      <p className='text-2xl text-gray-300 mb-8 text-center'>Oops! The page you're looking for doesn't exist.</p>
      <Link
        to='/'
        className='px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition-colors duration-300'
      >
        Go to Home
      </Link>
    </div>
  )
}

export default NotFound