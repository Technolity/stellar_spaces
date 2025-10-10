import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      url: '#',
      icon: '📷'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: '🐦'
    },
    {
      name: 'Facebook',
      url: '#',
      icon: '📘'
    }
  ]

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Architecture', href: '#projects' },
      { name: 'Interior Design', href: '#projects' },
      { name: 'Consulting', href: '#' },
      { name: 'Project Management', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Portfolio', href: '#projects' },
      { name: 'Case Studies', href: '#' },
      { name: 'FAQs', href: '#' }
    ]
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-sans text-white">
              Stellar Spaces
            </h3>
            <p className="text-gray-400 mb-4 font-sans">
              Redefining architectural innovation through sustainable design and creative excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-sans text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300 font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-sans text-white">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300 font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-sans text-white">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300 font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-sans mb-4 md:mb-0">
            © {currentYear} Stellar Spaces. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm font-sans">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm font-sans">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm font-sans">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
