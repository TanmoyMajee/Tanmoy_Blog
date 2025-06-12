
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className=' flex flex-col sm:flex-row sm:justify-between items-center 
    px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 shadow-sm border-b border-amber-200 gap-3 '>
      <Link
        to="/"
        className='text-3xl font-bold text-amber-800 hover:text-amber-900 duration-200'
      >
        Tanmoy
      </Link>

      <nav className='flex gap-8 '>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg  font-medium hover:text-amber-700 hover:underline underline-offset-4 decoration-2 ${isActive
              ? 'text-amber-800 underline decoration-amber-600'
              : 'text-gray-300'
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-amber-700 hover:underline underline-offset-4 decoration-2 ${isActive
              ? 'text-amber-800 underline decoration-amber-600'
              : 'text-gray-300'
            }`
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-amber-700 hover:underline underline-offset-4 decoration-2 ${isActive
              ? 'text-amber-800 underline decoration-amber-600'
              : 'text-gray-300'
            }`
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  )
}

export default Header