import { Layout } from "@/components/layout/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Shield, Home, Camera, Leaf, Thermometer, MapPin } from "lucide-react"

const projects = [
  {
    title: "Gate Access & Security Control",
    type: "Security & Access Control",
    description: "Advanced gate access system with AI license plate reading, cameras, and remote access control. Features both modern keypad entry and traditional garage door button options for convenience.",
    features: ["AI license plate detection", "Remote camera access", "Keypad entry system", "Mobile app control", "Weather-resistant cameras", "24/7 monitoring"],
    image: "/api/placeholder/400/300",
    date: "2024",
    size: "Main entrance"
  },
  {
    title: "Animal Monitoring System",
    type: "Livestock Technology",
    description: "Comprehensive monitoring for horse stalls and baby goat pens with remote temperature alerts and health monitoring. Peace of mind for livestock owners.",
    features: ["Live stall monitoring", "Temperature alerts", "Health tracking", "Mobile notifications", "Night vision cameras", "Weather protection"],
    image: "/api/placeholder/400/300",
    date: "2024",
    size: "Multiple barns"
  },
  {
    title: "Property Security Cameras",
    type: "Surveillance System",
    description: "Strategic camera placement with smart alerts, including swimming pool monitoring and perimeter security. Custom alert system for different zones.",
    features: ["Swimming pool monitoring", "Perimeter security", "Smart motion alerts", "Zone-based notifications", "Cloud storage", "Mobile access"],
    image: "/api/placeholder/400/300",
    date: "2024",
    size: "Full property coverage"
  },
  {
    title: "Ranch Mesh Internet",
    type: "Network Infrastructure",
    description: "Enterprise-grade mesh WiFi system covering entire ranch properties, barns, and outdoor areas. Seamless connectivity across large acreage.",
    features: ["Multi-point coverage", "Outdoor access points", "Seamless roaming", "Band steering", "Remote management", "High-speed connectivity"],
    image: "/api/placeholder/400/300",
    date: "2024",
    size: "Large acreage"
  },
  {
    title: "Smart Home Automation",
    type: "Home Control System",
    description: "Complete smart home setup with automated lighting, motorized blinds, and voice control. Create custom scenes and schedules for your lifestyle.",
    features: ["Smart lighting control", "Motorized blinds", "Voice commands", "Custom scenes", "Mobile app control", "Energy efficiency"],
    image: "/api/placeholder/400/300",
    date: "2024",
    size: "Residential"
  },
  {
    title: "Smart Garden Planning",
    type: "Agricultural Technology",
    description: "Intelligent garden monitoring and automation with soil sensors, irrigation control, and climate monitoring for optimal plant health.",
    features: ["Soil moisture sensors", "Automated irrigation", "Climate monitoring", "Plant health tracking", "Weather integration", "Mobile alerts"],
    image: "/api/placeholder/400/300",
    date: "2024",
    size: "Garden areas"
  }
]

const categories = [
  { name: "All Projects", count: projects.length },
  { name: "Security & Access", count: 2 },
  { name: "Livestock Monitoring", count: 1 },
  { name: "Network Infrastructure", count: 1 },
  { name: "Smart Home", count: 1 },
  { name: "Agricultural Tech", count: 1 }
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
              Explore our recent projects and see how we&apos;ve transformed rural properties 
              with smart technology solutions across North Central Texas.
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
                      {project.type.includes("Security") && <Shield className="w-8 h-8 text-blue-600" />}
                      {project.type.includes("Livestock") && <Thermometer className="w-8 h-8 text-green-600" />}
                      {project.type.includes("Surveillance") && <Camera className="w-8 h-8 text-purple-600" />}
                      {project.type.includes("Network") && <Wifi className="w-8 h-8 text-orange-600" />}
                      {project.type.includes("Smart Home") && <Home className="w-8 h-8 text-indigo-600" />}
                      {project.type.includes("Agricultural") && <Leaf className="w-8 h-8 text-emerald-600" />}
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
