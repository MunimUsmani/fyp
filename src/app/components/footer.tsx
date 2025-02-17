import Link from "next/link"
import { BrainCircuit } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <BrainCircuit className="w-8 h-8 mr-2 text-teal-500" />
            <span className="text-xl font-bold">PsyCare AI</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/privacy" className="hover:text-teal-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-teal-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 PsyCare AI . All rights reserved.</p>
          <p className="mt-2">Empowering medical professionals with AI-driven psychological insights.</p>
        </div>
      </div>
    </footer>
  )
}


