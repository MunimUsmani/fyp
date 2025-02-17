import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-900 leading-tight">
            Advanced Psychological
            <br />
            Distress Analysis
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-700">
            Empowering medical professionals with AI-driven insights
          </p>
          <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
            <Link href="/auth">Get Started</Link>
          </Button>
        </div>
        <div className="lg:w-1/2 relative">
          <Image
            src="/brain-network.png"
            alt="Brain network visualization"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl w-full h-auto"
          />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 right-0 w-32 h-32 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </section>
  )
}