import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Start with a free 15-30 minute phone consultation to discuss your needs.
          We&apos;ll determine if an on-site visit is warranted and design a custom solution for your property.
        </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get Quote
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Free Phone Consultation</h3>
              <p className="text-blue-100 text-sm">15-30 minute call to discuss your needs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-blue-100 text-sm">Ongoing assistance and maintenance</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Custom Solutions</h3>
              <p className="text-blue-100 text-sm">Tailored to your specific needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
