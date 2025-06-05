import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm Tanmoy Majhi
        </h1>
        <p className="text-xl sm:text-2xl mb-6">
          Developer | Problem Solver  | Student
        </p>
        <p>
          Currently pursuing bachelor's in computer science at  
          <a
            href="https://www.heritageit.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 hover:underline px-1"
          >
             Heritage 
          </a>
          , Kolkata, from 2023—2026.
        </p>
        <p className="text-gray-300 mb-8">
          Passionate about building scalable web applications and solving complex problems. Proficient in React, Node.js, MongoDB, and Express.js.
        </p>
       <br/>
       <p>
          I enjoy solving data-structure & algorithms problems. t helps in improving my problem-solving skills.
       </p>
      </div>
      {/* div for dsa section  */}
      <div className="grid grid-cols-3  gap-6 md:gap-10 m-4 md:m-14">
        {/* leetcode section  */}
        <div className='bg-gray-800 p-4 rounded-lg w-full md:max-w-[300px] mx-auto'>
          <h2 className='text-l md:text-xl font-bold mb-2'>Leetcode</h2>
          <p className='text-gray-300'>
            Rating - 1500+
          </p>
          <a href="https://leetcode.com/TanmoyMajee/" target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:text-blue-600'>
            View Profile
          </a>
        </div>

        <div className='bg-gray-800 p-4 rounded-lg w-full md:max-w-[300px] mx-auto'>
          <h2 className='text-l md:text-xl font-bold mb-2'>CodeChef</h2>
          <p className='text-gray-300'>
            Rating - 1500+
          </p>
          <a href="https://leetcode.com/TanmoyMajee/" target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:text-blue-600'>
            View Profile
          </a>
        </div>

        <div className='bg-gray-800 p-4 rounded-lg w-full md:max-w-[300px] mx-auto'>
          <h2 className=' md:text-xl font-bold mb-2'>CodeForce</h2>
          <p className='text-gray-300'>
            Rating - 1500+
          </p>
          <a href="https://leetcode.com/TanmoyMajee/" target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:text-blue-600'>
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
