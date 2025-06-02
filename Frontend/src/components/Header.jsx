import React from 'react'

function Header() {
  return (
    <div className='flex gap-50 bg-amber-100 '>
      <div className=''>Tanmoy</div>
      <div className='flex gap-6'>
        <div>
          Home
        </div>
        <div>
          Projects
        </div>
        <div>
          Contact
        </div>
      </div>
    </div>
  )
}

export default Header