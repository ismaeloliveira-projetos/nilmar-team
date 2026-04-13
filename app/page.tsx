import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Transformations } from "@/components/transformations"
import { HowItWorks } from "@/components/how-it-works"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Transformations />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
