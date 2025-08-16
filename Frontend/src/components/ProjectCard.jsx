import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'

function ProjectCard1({project}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2.5 text-white bg-gray-700 px-6 py-6 rounded-lg hover:scale-102 transition-all'>
      <div>
        <h1 className='text-2xl font-bold'>{project.title}</h1>
        <p className='px-1 py-1'>{project.description}</p>
        <div className='flex gap-3.5 px-1 py-1 '>
          {/* live Link  */}
          {project.liveLink && (
            <a 
            href={project.liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-blue-500'
            >
            <HiOutlineExternalLink/>
            <h1>Live Demo</h1>
          </a>)}
          {/* git Huub Link */}
          {
            project.githubLink && (
              <a
                className='flex items-center gap-2'
                target='_blank'
                rel='noopener noreferrer'
                href={project.githubLink}>
                  <FaGithub/>
                  <h1>GitHub</h1>
              </a>
            )
          }
        </div>
        {/* TechNoloy */}
       <div className='flex flex-wrap gap-1.5   px-1 py-1'>
        {
          project.technologies.map((e,i)=>(
              <span key={i}
              className='bg-gray-600 rounded-2xl px-2 py-0.5 text-sm'
              >
                {e}
              </span>
          ))
        }
       </div>
        {/* Date */}
        <div className=' px-1 py-1'>
          {project.date}
        </div>
      </div>
      {/* <div className='bg-gray-600 rounded-lg text-center'>
        <image src={project.img} >

        </image>
        {
          project.video?(
            <h1> Video Demo</h1>
          ):(
            <h1>
              Working on Video Demo 
            </h1>
          )
        }
      </div> */}
 <div className='bg-gray-600 rounded-lg text-center p-4'>
  {project.img ? (
    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
      <img 
        src={project.img} 
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity"
      />
    </a>
  ) : (
    <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
      <span className="text-gray-400 text-lg">No Image Available</span>
    </div>
  )}
  {project.video ? (
    <h1 className="text-white text-xl font-semibold">
      Video Demo
    </h1>
  ) : (
    <h1 className="text-white text-xl font-semibold">
      Working on Video Demo
    </h1>
  )}
</div>
    </div>
  )
}

export default ProjectCard1