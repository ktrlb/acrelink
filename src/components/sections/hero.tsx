import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Wifi, Home, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Shield className="w-4 h-4 mr-2" />
                North Central Texas
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smart Technology for{" "}
                <span className="text-blue-600">Large Properties</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Professional installation and consulting for mesh WiFi, security cameras, 
                and smart home systems on estates and rural homesteads.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Wifi className="w-4 h-4 text-green-500" />
                <span>Mesh WiFi Systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>Security Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Home className="w-4 h-4 text-purple-500" />
                <span>Smart Home Automation</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="space-y-6">
                {/* Network Dashboard Mockup */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-white text-sm">Network Dashboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-600 rounded p-3 text-center">
                      <div className="text-white text-xs">Main House</div>
                      <div className="text-white text-lg font-bold">-45 dBm</div>
                    </div>
                    <div className="bg-green-600 rounded p-3 text-center">
                      <div className="text-white text-xs">Barn</div>
                      <div className="text-white text-lg font-bold">-52 dBm</div>
                    </div>
                  </div>
                </div>

                {/* Camera Feed Mockup */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Security Camera</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-300 rounded h-24 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Live Feed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
