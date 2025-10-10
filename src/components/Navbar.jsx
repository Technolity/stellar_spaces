import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Initialize theme on component mount
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('stellar-theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('stellar-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('stellar-theme', 'light')
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg dark:bg-gray-900/95' 
          : 'bg-white/90 backdrop-blur-md dark:bg-gray-900/90'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 md:space-x-3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-black/10 rounded-lg backdrop-blur-sm dark:bg-gray-800/80"></div>
              <img 
                src="/logo.png"
                alt="Stellar Spaces Logo"
                className="h-8 w-auto md:h-10 relative z-10 contrast-125 brightness-110 saturate-110 mix-blend-multiply dark:invert dark:brightness-200"
                onError={() => setLogoError(true)}
              />
            </div>

            {logoError && (
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight font-sans">
                  STELLAR SPACES
                </span>
                <span className="text-[10px] md:text-xs text-gray-700 dark:text-gray-400 font-light -mt-1 tracking-wider font-sans hidden sm:block">
                  ARCHITECTURAL DESIGN
                </span>
              </div>
            )}
          </motion.div>

          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {['home', 'projects', 'clients', 'about', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className="font-medium capitalize text-gray-800 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300 relative group font-sans text-sm lg:text-base"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300 dark:bg-pink-400"></span>
                </motion.button>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`w-12 h-6 md:w-14 md:h-7 rounded-full p-1 transition-all duration-300 ${
                isDark ? 'bg-pink-500' : 'bg-gray-300'
              }`}
            >
              <div className={`w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-md transition-transform duration-300 transform ${
                isDark ? 'translate-x-6 md:translate-x-7' : 'translate-x-0'
              }`} />
            </button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-5 bg-gray-800 dark:bg-gray-300 transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 w-5 bg-gray-800 dark:bg-gray-300 transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 w-5 bg-gray-800 dark:bg-gray-300 transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl rounded-b-2xl p-4 border-t border-gray-200 dark:bg-gray-900/95 dark:border-gray-700"
          >
            <div className="flex flex-col space-y-3">
              {['home', 'projects', 'clients', 'about', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-800 dark:text-gray-300 font-medium capitalize py-3 text-left hover:text-pink-600 dark:hover:text-pink-400 transition-colors border-b border-gray-200 dark:border-gray-700 last:border-b-0 font-sans text-base"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
