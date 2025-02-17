import Header from "@/app/components/header"
import Hero from "@/app/components/Hero"
import ProjectExplanation from "@/app/components/Explanation"
import Features from "@/app/components/features"
import UsageInstructions from "@/app/components/Usage"
import GetStartedCTA from "@/app/components/getStarted"
import Footer from "@/app/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProjectExplanation />
        <Features />
        <UsageInstructions />
        <GetStartedCTA />
      </main>
      <Footer />
    </div>
  )
}
