import { Layout } from "@/components/layout/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, MapPin, Clock, Shield, Zap } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Expertise",
    description: "Our team brings years of experience in rural property technology solutions."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay current with the latest smart technology trends and solutions."
  },
  {
    icon: Award,
    title: "Quality",
    description: "We use only premium equipment and professional installation practices."
  }
]

const team = [
  {
    name: "Rich Bold",
    role: "Lead Engineer & Technology Specialist",
    description: "Rich is the mastermind behind all our technology solutions. With years of engineering experience, he designs and implements custom smart technology systems that transform rural properties into connected, automated havens."
  },
  {
    name: "Karlie Bold",
    role: "Office Manager & Customer Relations",
    description: "Karlie handles all the behind-the-scenes operations, from customer communications to project coordination. She ensures every client receives personalized attention and seamless service throughout their AcreLink experience."
  }
]

export default function About() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About AcreLink
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about bringing smart technology to large properties and rural estates 
              across North Central Texas, helping property owners enjoy modern conveniences without 
              compromising the rural lifestyle they love.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  AcreLink was founded with a simple mission: to bridge the technology gap between 
                  urban convenience and rural living. We recognized that large property owners and 
                  rural homesteaders often struggled to access the same smart technology solutions 
                  available in urban areas.
                </p>
                <p>
                  Our team brings together expertise in networking, security, and home automation, 
                  combined with deep understanding of the unique challenges faced by rural property 
                  owners. From mesh WiFi systems that cover entire ranches to security solutions 
                  that work in remote locations, we've developed specialized approaches for rural 
                  technology deployment.
                </p>
                <p>
                  Today, we're proud to serve property owners across North Central Texas, helping 
                  them enjoy the benefits of smart technology while preserving the rural lifestyle 
                  they cherish.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose AcreLink?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rural Property Specialists</h3>
                    <p className="text-gray-600">We understand the unique challenges of large properties and rural areas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Solutions</h3>
                    <p className="text-gray-600">Every property is unique, so every solution is tailored to your specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                    <p className="text-gray-600">We don't just install systems - we provide ongoing support and maintenance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Expertise</h3>
                    <p className="text-gray-600">Based in North Central Texas, we understand local conditions and requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-base font-medium text-blue-600">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base">
                      {member.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-gray-600 mb-6">
                Start with a free phone consultation to discuss how we can help transform your property 
                with smart technology solutions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Phone Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
