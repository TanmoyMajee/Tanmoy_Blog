import React from 'react';

const Hero = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-900 text-white  px-5 ">
      <div className="max-w-3xl text-center pt-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm Tanmoy Majee
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
          I enjoy solving data-structure & algorithms problems. that helps in improving my problem-solving skills.
       </p>
      </div>
      {/* div for dsa section  */}
      <div className="grid grid-cols-3  gap-2  md:gap-6 mx-1 my-2.5 md:m-14 ">
        {/* leetcode section  */}
        <div className='bg-gray-800 p-4 rounded-lg w-full md:max-w-[300px] mx-auto  hover:bg-gray-700 hover:scale-110 transition-all'>
          <h2 className='text-l md:text-xl font-bold mb-2'>Leetcode</h2>
          <p className='text-gray-300'>
            Rating - 1500+
          </p>
          <a href="https://leetcode.com/u/tanmoymajee239/" target='_blank' rel='noopener noreferrer' className='text-blue-500 text-sm md:text-lg hover:text-blue-600'>
            View Profile
          </a>
        </div>

        <div className='bg-gray-800 p-4 rounded-lg w-full md:max-w-[300px] mx-auto hover:bg-gray-700 hover:scale-110 transition-all'>
          <h2 className='text-l md:text-xl font-bold mb-2'>CodeChef</h2>
          <p className='text-gray-300'>
            Rating - 1400+
          </p>
          <a href="https://www.codechef.com/users/tanmoy_majee" target='_blank' rel='noopener noreferrer' className='text-blue-500 text-sm md:text-lg hover:text-blue-600'>
            View Profile
          </a>
        </div>

        <div className='bg-gray-800 p-4 rounded-lg w-full md:max-w-[300px] mx-auto  hover:bg-gray-700 hover:scale-110 transition-all'>
          <h2 className=' text-l md:text-xl font-bold mb-2'>CodeForce</h2>
          <p className='text-gray-300'>
            Rating - 1000+
          </p>
          <a href="https://codeforces.com/profile/Tanmoy_007?graphType=all" target='_blank' rel='noopener noreferrer' className='text-blue-500 text-sm md:text-lg hover:text-blue-600'>
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
