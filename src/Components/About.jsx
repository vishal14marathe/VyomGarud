import { useEffect, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-white">
            Mission Critical UAV Technology
          </h2>
          
          <div className="h-1 w-24 bg-orange-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                VyomGarud specializes in developing cutting-edge unmanned aerial systems 
                engineered for defense, surveillance, and tactical operations. Our drones 
                combine advanced autonomy with rugged reliability to excel in the most 
                challenging environments.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                With a focus on precision engineering and mission success, we deliver 
                solutions that empower security forces with enhanced situational awareness 
                and operational capabilities.
              </p>
              
              <div className="flex items-center space-x-4 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">ISO 9001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Military Grade</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <h3 className="text-xl font-semibold mb-4 text-white">Our Expertise</h3>
              <div className="space-y-3">
                {['Aerospace Engineering', 'AI & Autonomy', 'Secure Communications', 'Mission Systems'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About