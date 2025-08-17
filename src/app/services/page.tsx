import { Layout } from "@/components/layout/layout"
import { Services } from "@/components/sections/services"
import { CTA } from "@/components/sections/cta"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Wifi, Shield, Home, Settings, Zap, Users } from "lucide-react"

const detailedServices = [
  {
    icon: Wifi,
    title: "Mesh WiFi Systems",
    description: "Enterprise-grade mesh networking solutions designed for large properties and rural areas.",
    features: [
      "Multi-point coverage across entire properties",
      "Outdoor access points for barns and outbuildings",
      "Seamless roaming between access points",
      "Advanced band steering and load balancing",
      "Professional installation and configuration",
      "Ongoing monitoring and optimization"
    ]
  },
  {
    icon: Shield,
    title: "Security Camera Systems",
    description: "Professional surveillance solutions with advanced features for property protection.",
    features: [
      "4K resolution cameras with night vision",
      "Motion detection and smart alerts",
      "Cloud and local storage options",
      "Remote monitoring via mobile app",
      "Weather-resistant outdoor cameras",
      "Professional installation and setup"
    ]
  },
  {
    icon: Home,
    title: "Smart Home Automation",
    description: "Comprehensive automation solutions for lighting, climate, and security control.",
    features: [
      "Smart lighting with scene creation",
      "Climate control and HVAC automation",
      "Voice control integration",
      "Mobile app for remote control",
      "Custom automation schedules",
      "Professional system integration"
    ]
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Seamlessly connect all your smart devices and systems for unified control.",
    features: [
      "Centralized control hub setup",
      "Custom dashboard creation",
      "API integration capabilities",
      "Scalable architecture design",
      "Professional programming",
      "Ongoing system optimization"
    ]
  },
  {
    icon: Zap,
    title: "Consultation & Design",
    description: "Expert planning and system design tailored to your specific property and needs.",
    features: [
      "Comprehensive site survey",
      "Custom system design",
      "Equipment selection and specification",
      "Installation planning and timeline",
      "Budget optimization",
      "Future expansion planning"
    ]
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "Reliable support and maintenance to keep your systems running smoothly.",
    features: [
      "Remote monitoring and alerts",
      "24/7 emergency support",
      "Regular system updates",
      "Performance optimization",
      "Troubleshooting and repairs",
      "Training and documentation"
    ]
  }
]

export default function ServicesPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive smart technology solutions designed specifically for large properties, 
              estates, and rural homesteads across North Central Texas.
            </p>
          </div>

          <div className="space-y-16">
            {detailedServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl">
                <CardHeader className="pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Start with a free 15-30 minute phone consultation to discuss your needs. 
                We'll determine if an on-site visit is warranted and provide a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Schedule Phone Consultation
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
    </Layout>
  )
}
