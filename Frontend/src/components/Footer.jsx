import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center p-8 min-h-[200px] bg-gradient-to-r from-gray-900 to-gray-800'>
      {/* div for logo and social media links */}
      <div className='flex gap-6 p-4'>
        <a href="https://github.com/TanmoyMajee" target="_blank"
          rel="noopener noreferrer"
          className='text-3xl text-gray-300 hover:scale-110 transition-all'>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tanmoy-majee-2b7280288/" target="_blank"
          rel="noopener noreferrer"
          className='text-3xl text-gray-300 hover:scale-110 transition-all'>
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/u/tanmoymajee239/" target="_blank"
          rel="noopener noreferrer"
          className='text-3xl text-gray-300 hover:scale-110 transition-all'>
          <SiLeetcode />
        </a>
      </div>
      {/* div for content info */}
      <div className='text-xl text-gray-300 font-semibold mt-4'>TANMOY MAJEE ©2025</div>
    </div>
  )
}

export default Footer