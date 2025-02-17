 "use client"

import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { BrainCircuit, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="w-full py-4 px-6 bg-white bg-opacity-90 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-800 flex items-center">
          <BrainCircuit className="w-8 h-8 mr-2 text-teal-500" />
          PsyCareAI
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-blue-700 hover:text-teal-500 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="text-blue-700 hover:text-teal-500 transition-colors"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("usage")}
                className="text-blue-700 hover:text-teal-500 transition-colors"
              >
                Usage
              </button>
            </li>
            <li>
              <Button asChild variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                <Link href="/auth">Sign In</Link>
              </Button>
            </li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6 text-blue-800" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="w-full text-left py-2 px-4 text-blue-700 hover:bg-blue-50"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="w-full text-left py-2 px-4 text-blue-700 hover:bg-blue-50"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("usage")}
                className="w-full text-left py-2 px-4 text-blue-700 hover:bg-blue-50"
              >
                Usage
              </button>
            </li>
            <li>
              <Button asChild variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50">
                <Link href="/auth">Sign In</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}