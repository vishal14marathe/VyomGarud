import { useEffect, useState } from 'react'

const Capabilities = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('capabilities')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const capabilities = [
    {
      title: "Tactical Surveillance Drones",
      description: "Long-endurance UAVs with advanced imaging systems for intelligence gathering and reconnaissance missions.",
      icon: "🛰️",
      features: ["360° imaging", "Night vision", "Long range"]
    },
    {
      title: "Autonomous Swarm Systems",
      description: "Coordinated multi-drone operations for comprehensive area coverage and complex mission execution.",
      icon: "🐝",
      features: ["AI coordination", "Real-time sync", "Scalable units"]
    },
    {
      title: "Heavy-Lift Cargo UAVs",
      description: "Robust platforms capable of transporting critical supplies to remote or inaccessible locations.",
      icon: "🚁",
      features: ["High payload", "All-weather", "VTOL capable"]
    },
    {
      title: "Counter-UAV Technology",
      description: "Advanced detection and neutralization systems to protect airspace from unauthorized drone activity.",
      icon: "🛡️",
      features: ["RF detection", "GPS spoofing", "Kinetic options"]
    }
  ]

  return (
    <section id="capabilities" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
            Our Capabilities
          </h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 hover:border-orange-500/50 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Capabilities