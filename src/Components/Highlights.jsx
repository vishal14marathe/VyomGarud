import { useEffect, useState } from 'react'

const Highlights = () => {
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

    const element = document.getElementById('highlights')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      title: "Military-Grade Durability",
      description: "Engineered to withstand extreme conditions and rigorous operational demands with IP67 rating and MIL-STD-810 compliance.",
      icon: "🛡️"
    },
    {
      title: "Advanced Autonomy",
      description: "AI-powered systems enabling complex mission execution with minimal human intervention and real-time decision making.",
      icon: "🤖"
    },
    {
      title: "Secure Communications",
      description: "Encrypted data links and anti-jamming technology ensuring mission integrity and operational security in contested environments.",
      icon: "🔒"
    }
  ]

  return (
    <section id="highlights" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
            Key Features
          </h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-start p-8 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-500 group"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-6 mb-4 md:mb-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{highlight.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Operational Units' },
              { number: '24/7', label: 'Support' },
              { number: '99.9%', label: 'Reliability' },
              { number: '100+', label: 'Missions' }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights