import { Button } from "@/app/components/ui/button"
import Link from "next/link"

export default function GetStartedCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Enhance Your Clinical Practice with AI-Powered Insights</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join leading medical professionals in leveraging cutting-edge technology for improved patient care and
          outcomes.
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
          <Link href="/auth">Get Started Now</Link>
        </Button>
      </div>
    </section>
  )
}