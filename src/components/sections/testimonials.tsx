import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Karlie Bold",
    location: "Farm owner & office manager",
    content: "Living on our farm with all this smart technology has been incredible! We have cameras on demand, AI person and license plate detection at our farm gate, and I can ask Siri about our swimming pool temperature. It's all these little luxuries that make rural living so much better.",
    rating: 5
  },
  {
    name: "Rich Bold",
    location: "Lead Engineer & Technology Specialist",
    content: "As the engineer behind these systems, I've seen firsthand how smart technology transforms rural properties. Our farm is a living example of what's possible - from automated security to climate control, every system works together seamlessly.",
    rating: 5
  },
  {
    name: "Sarah & Mike Johnson",
    location: "150-acre ranch, Weatherford",
    content: "AcreLink transformed our property with a mesh WiFi system that covers our entire ranch. We can now work from anywhere on our property with reliable internet.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Team & Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our team members and satisfied clients about their experience with smart technology 
            on rural properties across North Central Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
