import { Card, CardContent } from "@/app/components/ui/card"
import { Brain, Activity, FileText } from "lucide-react"

export default function ProjectExplanation() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Revolutionizing Mental Health Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-blue-100">
            <CardContent className="pt-6">
              <Brain className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Facial Gesture Analysis</h3>
              <p className="text-blue-700">
                Advanced AI algorithms detect micro-expressions and facial movements to infer psychological states.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-blue-100">
            <CardContent className="pt-6">
              <Activity className="w-12 h-12 mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Voice Pattern Recognition</h3>
              <p className="text-blue-700">
                Sophisticated voice analysis tools identify stress indicators in speech patterns and tonality.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-blue-100">
            <CardContent className="pt-6">
              <FileText className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Handwriting Analysis</h3>
              <p className="text-blue-700">
                Cutting-edge algorithms examine handwriting characteristics to uncover potential psychological distress
                markers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

