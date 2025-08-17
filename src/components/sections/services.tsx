import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Shield, Home, Settings, Zap, Users } from "lucide-react"

const services = [
  {
    icon: Wifi,
    title: "Mesh WiFi Systems",
    description: "Enterprise-grade mesh networking for large properties, barns, and outdoor areas. Ensure seamless connectivity across your entire estate.",
    features: ["Multi-point coverage", "Outdoor APs", "Seamless roaming", "Band steering"]
  },
  {
    icon: Shield,
    title: "Security Camera Systems",
    description: "Professional surveillance solutions with night vision, motion detection, and remote monitoring. Protect your property 24/7.",
    features: ["4K cameras", "Night vision", "Motion alerts", "Cloud storage"]
  },
  {
    icon: Home,
    title: "Smart Home Automation",
    description: "Control lighting, climate, and security from anywhere. Create custom scenes and schedules for your lifestyle.",
    features: ["Smart lighting", "Climate control", "Voice control", "Mobile app"]
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Seamlessly connect all your smart devices and systems for unified control and monitoring.",
    features: ["Centralized control", "Custom dashboards", "API integration", "Scalable architecture"]
  },
  {
    icon: Zap,
    title: "Consultation & Design",
    description: "Expert planning and system design tailored to your property layout and specific needs.",
    features: ["Site survey", "Custom design", "Equipment selection", "Installation planning"]
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "Reliable support and maintenance to keep your systems running smoothly long after installation.",
    features: ["Remote monitoring", "24/7 support", "Regular updates", "Troubleshooting"]
  }
]

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Smart Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to hands-off operation, we provide complete smart technology 
            solutions designed specifically for large properties and rural estates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your property with smart technology?
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
            <span>Hourly consultation rate + project-based installation pricing</span>
          </div>
        </div>
      </div>
    </section>
  )
}
