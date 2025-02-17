import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Zap, Shield, BarChart3, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Real-time Analysis",
      description: "Get instant insights into patient's psychological state during consultations.",
      icon: Zap,
    },
    {
      title: "HIPAA Compliant",
      description: "Ensure patient data privacy and security with our HIPAA-compliant platform.",
      icon: Shield,
    },
    {
      title: "Comprehensive Reports",
      description: "Generate detailed reports with visualizations for in-depth patient assessment.",
      icon: BarChart3,
    },
    {
      title: "Multi-provider Support",
      description: "Collaborate with other healthcare professionals for holistic patient care.",
      icon: Users,
    },
  ]

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Key Features for Medical Professionals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-teal-500" />
                <CardTitle className="text-xl font-semibold text-blue-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}