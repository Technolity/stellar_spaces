import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
      url: '#'
    },
    {
      name: 'LinkedIn', 
      icon: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png',
      url: '#'
    },
    {
      name: 'X (Twitter)',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png',
      url: '#'
    },
    {
      name: 'Facebook',
      icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', 
      url: '#'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-sans">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans">
            Ready to start your next project? Let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white font-sans"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white font-sans"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-sans">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none dark:bg-gray-800 dark:border-gray-600 dark:text-white font-sans"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary text-lg py-4 font-sans"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Office Location */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-sans">
                Our Office
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300 font-sans">
                <p>123 Architecture Avenue</p>
                <p>Design District, New York, NY 10001</p>
                <p>United States</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-sans">
                Contact Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 font-sans">hello@stellarspaces.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 font-sans">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🕒</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 font-sans">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-sans">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialPlatforms.map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all duration-300 p-2"
                  >
                    <img 
                      src={platform.icon} 
                      alt={platform.name}
                      className="w-6 h-6 filter brightness-0 dark:brightness-0 dark:invert"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact