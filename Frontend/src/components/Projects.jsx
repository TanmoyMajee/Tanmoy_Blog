// In your Projects.jsx or similar file
import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    title: "RagIT",
    description: "Chat with your PDFs using AI. Upload, ask, and get instant answers from your documents.",
    liveLink: "https://ragit-ccun.onrender.com/",
    githubLink: "https://github.com/TanmoyMajee/RagIt", // Replace with actual GitHub link
    technologies: ["TypeScript", "React.js", "Node js","Jwt","Prisma","PostgreSQL","LangChain (AI document processing)","Qdrant (Vector DB)","Firebase (for file storage)","Multer (file uploads)","Zod (validation)"],
    date: "May 20, 2025",
    video:false,
    img:"",
    videoDemoLink: "#"
  },
  {
    title: "Real Time Chat App",
    description: " A dynamic, real-time messaging platform built with the MERN stack that facilitates instant communication via one- to - one and group chats.",
    liveLink: "https://chatapp-frontend-y7yg.onrender.com/",
    githubLink: "https://github.com/TanmoyMajee/ChatApp", // Replace with actual GitHub link
    technologies: ["NodeJs", "Reactjs", "MongoDB", "Socket.io", "Express"],
    date: "Apr 20, 2025",
    video:false,
    img:"https://drive.google.com/uc?id=1zG_BL3a6OwympjS1lldcS0wheI-28JUR",
    videoDemoLink: "#" // Replace with actual video link
  },
  {
    title: "Blog Apllication",
    description: "a dynamic blog platform where users can create, read, update, and delete posts",
    liveLink: "https://blog-mern-frontend-1s1f.onrender.com/",
    githubLink: "https://github.com/TanmoyMajee/Blog_MERN", // Replace with actual GitHub link
    technologies: ["NodeJs", "React.js", "MongoDB","Jwt"],
    date: "Jan 20, 2024",
    video:false,
    img:"",
    videoDemoLink: "#"
  },
  // Add more projects here
]

function Projects() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto space-y-12'>
        <h2 className='text-4xl font-bold text-white mb-8 text-center'>Personal Projects</h2>
        {projectsData.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects