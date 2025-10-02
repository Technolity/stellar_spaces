import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "Foundation",
      description: "Stellar Spaces was founded with a vision to revolutionize architectural design through innovative thinking and sustainable practices."
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Completed the award-winning Urban Bridge Complex, establishing our reputation for innovative infrastructure design."
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded our team and took on international projects, bringing our unique design philosophy to global clients."
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Launched our research and development division focused on sustainable materials and smart building technologies."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-900 text-white">
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
    Our Story
  </h2>
  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans">
    From a student's vision to an industry-leading architectural firm.
  </p>
</motion.div>

{/* In the founder story section */}
<h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 font-mono">
  The Vision Behind Stellar Spaces
</h3>
<div className="space-y-4 text-gray-700 dark:text-gray-300 font-sans">
  {/* Your content */}
</div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold mb-6">
              The Vision Behind Stellar Spaces
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Founded by architecture student Alex Morgan, Stellar Spaces began as a passion project 
                to bridge the gap between academic theory and real-world architectural practice.
              </p>
              <p className="text-lg leading-relaxed">
                What started as late-night design sessions in a university dorm room has evolved into 
                a full-service architectural firm known for pushing boundaries and redefining spaces.
              </p>
              <p className="text-lg leading-relaxed">
                Our approach combines cutting-edge technology with timeless design principles, 
                creating spaces that are not only beautiful but also functional, sustainable, 
                and meaningful to the communities they serve.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { number: "50+", label: "Projects" },
                { number: "25+", label: "Clients" },
                { number: "15+", label: "Awards" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-8 last:mb-0"
              >
                {/* Year Marker */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  {item.year}
                </div>
                
                {/* Content */}
                <div className="ml-6 flex-1">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About