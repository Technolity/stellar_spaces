import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Clients from '../components/Clients'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home