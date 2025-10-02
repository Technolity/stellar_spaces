import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/project/${project.id}`}>
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Details
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors font-mono">
  {project.title}
</h3>
<p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 font-sans">
  {project.description}
</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard