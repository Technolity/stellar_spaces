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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full"
        >
          {/* Large Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center items-center mb-6 md:mb-8 px-4"
          >
            <div className="relative max-w-xs md:max-w-none">
              <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm dark:bg-gray-800/50"></div>
              <img 
                src="/logo.png"
                alt="Stellar Spaces Logo"
                className="h-24 w-auto sm:h-32 md:h-40 lg:h-48 relative z-10 contrast-125 brightness-110 saturate-110 mix-blend-multiply dark:invert dark:brightness-200 mx-auto"
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-gray-100 font-sans px-4"
            >
              STELLAR SPACES
            </motion.h1>
          )}
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-gray-100 font-sans px-4"
          >
            Redefining Architectural Innovation
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-gray-800 max-w-3xl mx-auto leading-relaxed dark:text-gray-200 font-sans font-medium px-4"
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
            className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-sans font-bold mx-auto"
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
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-900 rounded-full flex justify-center dark:border-gray-100"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 md:h-3 bg-gray-900 rounded-full mt-2 dark:bg-gray-100"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
