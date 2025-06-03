
import React from 'react'
import { Link,  NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between items-center px-6 py-4 bg-gradient-to-r from-amber-50 to-amber-100 shadow-sm border-b border-amber-200'>
      <Link 
        to="/" 
        className='text-3xl font-bold text-amber-800 hover:text-amber-900 duration-200'
      >
        Tanmoy
      </Link>
      
      <nav className='flex gap-8'>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-lg font-medium hover:text-amber-700 hover:underline underline-offset-4 decoration-2 ${
              isActive 
                ? 'text-amber-800 underline decoration-amber-600' 
                : 'text-gray-700'
            }`
          }
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `text-lg font-medium hover:text-amber-700 hover:underline underline-offset-4 decoration-2 ${
              isActive 
                ? 'text-amber-800 underline decoration-amber-600' 
                : 'text-gray-700'
            }`
          }
        >
          Projects
        </NavLink>
        
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `text-lg font-medium hover:text-amber-700 hover:underline underline-offset-4 decoration-2 ${
              isActive 
                ? 'text-amber-800 underline decoration-amber-600' 
                : 'text-gray-700'
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