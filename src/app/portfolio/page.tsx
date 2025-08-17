import { Layout } from "@/components/layout/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Shield, Home, MapPin, Calendar, Users } from "lucide-react"

const projects = [
  {
    title: "Weatherford Ranch WiFi Network",
    location: "Weatherford, TX",
    type: "Mesh WiFi System",
    description: "Complete mesh WiFi coverage for a 150-acre ranch, including the main house, barn, and outdoor areas.",
    features: ["Multi-point mesh network", "Outdoor access points", "Seamless roaming", "Remote monitoring"],
    image: "/api/placeholder/400/300",
    date: "2024",
    size: "150 acres"
  },
  {
    title: "Fort Worth Estate Security",
    location: "Fort Worth, TX",
    type: "Security Camera System",
    description: "Comprehensive security solution for a luxury estate with 4K cameras and smart motion detection.",
    features: ["4K security cameras", "Night vision", "Motion alerts", "Cloud storage"],
    image: "/api/placeholder/400/300",
    date: "2024",
    size: "25 acres"
  },
  {
    title: "Granbury Homestead Automation",
    location: "Granbury, TX",
    type: "Smart Home System",
    description: "Full smart home automation including lighting, climate control, and security integration.",
    features: ["Smart lighting", "Climate control", "Voice control", "Mobile app"],
    image: "/api/placeholder/400/300",
    date: "2023",
    size: "40 acres"
  },
  {
    title: "Cleburne Farm Network",
    location: "Cleburne, TX",
    type: "Agricultural WiFi",
    description: "Specialized WiFi network for agricultural operations with coverage across fields and outbuildings.",
    features: ["Agricultural-grade equipment", "Field coverage", "Weather resistance", "Remote management"],
    image: "/api/placeholder/400/300",
    date: "2023",
    size: "200 acres"
  },
  {
    title: "Stephenville Ranch Integration",
    location: "Stephenville, TX",
    type: "System Integration",
    description: "Complete integration of existing systems with new smart technology for unified control.",
    features: ["Legacy system integration", "Custom dashboard", "API development", "Training program"],
    image: "/api/placeholder/400/300",
    date: "2023",
    size: "300 acres"
  },
  {
    title: "Alvarado Estate Technology",
    location: "Alvarado, TX",
    type: "Comprehensive Solution",
    description: "Full technology transformation including WiFi, security, automation, and entertainment systems.",
    features: ["Complete system design", "Premium equipment", "Professional installation", "Ongoing support"],
    image: "/api/placeholder/400/300",
    date: "2023",
    size: "75 acres"
  }
]

const categories = [
  { name: "All Projects", count: projects.length },
  { name: "WiFi Networks", count: 2 },
  { name: "Security Systems", count: 1 },
  { name: "Smart Home", count: 1 },
  { name: "System Integration", count: 1 },
  { name: "Comprehensive", count: 1 }
]

export default function Portfolio() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent projects and see how we've transformed properties across North Central Texas 
              with smart technology solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-2">
                      {project.type.includes("WiFi") && <Wifi className="w-8 h-8 text-blue-600" />}
                      {project.type.includes("Security") && <Shield className="w-8 h-8 text-green-600" />}
                      {project.type.includes("Smart Home") && <Home className="w-8 h-8 text-purple-600" />}
                      {project.type.includes("Integration") && <Users className="w-8 h-8 text-orange-600" />}
                      {project.type.includes("Comprehensive") && <Wifi className="w-8 h-8 text-blue-600" />}
                    </div>
                    <p className="text-sm">Project Image</p>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {project.type}
                    </div>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{project.size}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-6">
                Start with a free phone consultation to discuss how we can bring smart technology 
                to your property, just like we did for these satisfied clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Schedule Phone Consultation
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
