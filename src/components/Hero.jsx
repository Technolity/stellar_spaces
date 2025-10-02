import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [logoError, setLogoError] = useState(false)

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - LIGHT OVERLAY for dark text visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Large Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center items-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm dark:bg-gray-800/50"></div>
              <img 
                src="/logo.png"
                alt="Stellar Spaces Logo"
                className="h-32 sm:h-40 md:h-48 w-auto relative z-10 contrast-125 brightness-110 saturate-110 mix-blend-multiply dark:invert dark:brightness-200"
                onError={() => setLogoError(true)}
              />
            </div>
          </motion.div>

          {/* Fallback if logo doesn't load */}
          {logoError && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gray-900 dark:text-gray-100 font-sans"
            >
              STELLAR SPACES
            </motion.h1>
          )}
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100 font-sans"
          >
            Redefining Architectural Innovation
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl mb-12 text-gray-800 max-w-3xl mx-auto leading-relaxed dark:text-gray-200 font-sans font-semibold"
          >
            From concept to creation, bringing visionary designs to life.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="btn-primary text-lg px-8 py-4 font-sans font-bold"
          >
            Explore Our Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-900 rounded-full flex justify-center dark:border-gray-100"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-900 rounded-full mt-2 dark:bg-gray-100"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero