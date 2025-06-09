import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'

function ProjectCard({ project }) {
  return (
    <div className='bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8'>
      {/* Text Content */}
      <div className='flex-1'>
        <h3 className='text-3xl font-bold text-white mb-3 flex items-center gap-2'>
          <span className='text-blue-500 text-4xl mr-2'>•</span>
          {project.title}
        </h3>
        <p className='text-gray-300 text-lg mb-4'>{project.description}</p>

        {/* Links */}
        <div className='flex items-center gap-4 mb-4'>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300'
            >
              <HiOutlineExternalLink className='mr-2' />
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-300'
            >
              <FaGithub className='mr-2' />
              GitHub
            </a>
          )}
        </div>

        {/* Technologies */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className='bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Date */}
        <p className='text-gray-400 text-sm'>{project.date}</p>
      </div>

      {/* Video Demo / Image */}
      <div className='flex-shrink-0 w-full md:w-1/3 flex justify-center items-center'>
        {project.videoDemoLink ? (
          <a
            href={project.videoDemoLink}
            target='_blank'
            rel='noopener noreferrer'
            className='block w-full h-48 bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center text-gray-300 text-lg hover:bg-gray-600 transition-colors duration-300'
          >
            {/* You can replace this with an actual video embed or thumbnail */}
            <span className="text-center">video demo</span>
          </a>
        ) : (
          <div className='w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 text-lg'>
            No video available
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard