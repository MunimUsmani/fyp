 "use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import Link from "next/link"
import { BrainCircuit } from "lucide-react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/app/lib/firebase"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/dashboard") // Redirect to dashboard after successful login
    } catch (error) {
      setError("Failed to sign in. Please check your credentials.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-teal-50 px-4">
      <Card className="w-full max-w-[400px] bg-white shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <BrainCircuit className="w-12 h-12 text-teal-500" />
          </div>
          <CardTitle className="text-2xl text-blue-900">Sign In to PsyCareAI</CardTitle>
          <CardDescription className="text-blue-700">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-blue-200 focus:border-teal-500"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-blue-200 focus:border-teal-500"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <Button type="submit" className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="mt-4 text-sm text-center text-blue-700">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-teal-500 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}