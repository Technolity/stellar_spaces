import React from 'react'
import { motion } from 'framer-motion'

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
      {/* Quote Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl text-blue-600 mb-6"
      >
        "
      </motion.div>
      
      {/* Testimonial Text */}
     <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic font-sans"
>
  "{testimonial.text}"
</motion.p>

<h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg font-mono">
  {testimonial.name}
</h4>
<p className="text-gray-600 dark:text-gray-400 font-sans">{testimonial.company}</p>
      {/* Client Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center justify-center space-x-4"
      >
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="text-left">
          <h4 className="font-semibold text-gray-900 text-lg">
            {testimonial.name}
          </h4>
          <p className="text-gray-600">{testimonial.company}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default TestimonialCard