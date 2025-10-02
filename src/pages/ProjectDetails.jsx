import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/dummyData'

const ProjectDetails = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <span className="text-xl font-serif font-bold text-gray-900">
                Stellar Spaces
              </span>
            </Link>
            
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {project.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-500">
              <div>
                <span className="font-semibold">Location:</span> {project.location}
              </div>
              <div>
                <span className="font-semibold">Year:</span> {project.year}
              </div>
              <div>
                <span className="font-semibold">Status:</span> {project.details.status}
              </div>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  This innovative project represents the pinnacle of modern architectural design, 
                  combining cutting-edge technology with sustainable practices to create a space 
                  that is both beautiful and functional.
                </p>
                
                <p className="mb-6">
                  The design philosophy focused on creating harmony between the built environment 
                  and its natural surroundings, ensuring that every element serves a purpose while 
                  contributing to the overall aesthetic appeal.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2 mb-8">
                  {project.details.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Project Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  Project Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Architect:</span>
                    <span className="font-semibold">{project.details.architect}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Area:</span>
                    <span className="font-semibold">{project.details.area}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-semibold">{project.details.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-serif font-bold mb-4">
                  Start Your Project
                </h3>
                <p className="mb-4">
                  Inspired by this project? Let's discuss how we can bring your vision to life.
                </p>
                <Link
                  to="/#contact"
                  className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetails