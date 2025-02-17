import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function UsageInstructions() {
  const steps = [
    "Log in to your secure medical professional account",
    "Input or record patient data (facial video, voice recording, or handwritten text)",
    "Our AI model analyzes the input and generates a comprehensive psychological assessment",
    "Review the detailed analysis and insights on your dashboard",
    "Use the generated reports to inform your diagnosis and treatment plans",
  ]

  return (
    <section id="usage" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">How It Works</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2">
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/medical-dashboard.png"
              alt="PsyCareAI Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
