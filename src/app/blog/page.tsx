"use client"

import { Layout } from "@/components/layout/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Rss } from "lucide-react"
import { useEffect } from "react"

// Declare Facebook SDK types
declare global {
  interface Window {
    FB: {
      XFBML: {
        parse: () => void
      }
    }
  }
}

export default function Blog() {
  useEffect(() => {
    // Initialize Facebook SDK when component mounts
    if (typeof window !== 'undefined' && window.FB) {
      window.FB.XFBML.parse()
    }
  }, [])
  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with our latest projects, insights, and smart technology tips 
              for large properties and rural homesteads.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Facebook Feed */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <Facebook className="h-6 w-6 text-blue-600" />
                    <span>Follow Our Journey</span>
                  </CardTitle>
                  <CardDescription>
                    Get real-time updates, project photos, and behind-the-scenes content from our Facebook page.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Facebook Page Plugin */}
                    <div className="flex justify-center">
                      <div 
                        className="fb-page" 
                        data-href="https://www.facebook.com/acrelink"
                        data-tabs="timeline"
                        data-width="500"
                        data-height="600"
                        data-small-header="false"
                        data-adapt-container-width="true"
                        data-hide-cover="false"
                        data-show-facepile="true"
                      >
                        <blockquote 
                          cite="https://www.facebook.com/acrelink" 
                          className="fb-xfbml-parse-ignore"
                        >
                          <a href="https://www.facebook.com/acrelink" className="text-blue-600 hover:text-blue-800">
                            Visit our Facebook page for the latest updates
                          </a>
                        </blockquote>
                      </div>
                    </div>
                    
                    {/* Alternative: Direct Facebook link with preview */}
                    <div className="border-t pt-4">
                      <div className="text-center">
                        <p className="text-gray-600 mb-3">Or visit our Facebook page directly:</p>
                        <a 
                          href="https://www.facebook.com/acrelink" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <Facebook className="h-5 w-5" />
                          <span>Follow AcreLink on Facebook</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Follow Us */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">Stay Connected</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://www.facebook.com/acrelink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Follow on Facebook</p>
                      <p className="text-sm text-gray-600">Get project updates & tips</p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:info@acrelinkllc.com?subject=Newsletter Subscription&body=Hi, I would like to subscribe to your newsletter for updates on smart technology for large properties."
                    className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <Rss className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email Updates</p>
                      <p className="text-sm text-gray-600">Monthly insights & news</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="border-0 shadow-xl bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Ready to Get Started?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 mb-4">
                    Have questions about smart technology for your property? 
                    We&apos;d love to hear from you!
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Contact Us Today
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
