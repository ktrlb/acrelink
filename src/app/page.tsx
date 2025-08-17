import { Layout } from "@/components/layout/layout"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
    </Layout>
  )
}
