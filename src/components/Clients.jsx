import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials, clients } from '../data/dummyData'
import TestimonialCard from './TestomonialCard'

const Clients = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="clients" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-mono">
    Trusted by Industry Leaders
  </h2>
  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans">
    We've had the privilege of working with amazing clients who trust our vision and expertise.
  </p>
</motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCard testimonial={testimonials[currentTestimonial]} />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-12">
            Our Clients
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="font-semibold text-gray-600">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients