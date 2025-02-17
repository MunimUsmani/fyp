"use client"

import { useEffect, useState } from "react"
import { User } from "firebase/auth"
import { useRouter } from "next/navigation"
import { auth } from "@/app/lib/firebase"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        router.push("/auth")
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleSignOut = async () => {
    try {
      await auth.signOut()
      router.push("/")
    } catch (error) {
      console.error("Failed to sign out", error)
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-teal-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">PsyCareAI Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="new-patient" className="bg-white rounded-lg shadow-xl p-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="new-patient">Add New Patient</TabsTrigger>
            <TabsTrigger value="existing-patients">Existing Patients</TabsTrigger>
          </TabsList>
          <TabsContent value="new-patient">
            <Card>
              <CardHeader>
                <CardTitle>Add New Patient</CardTitle>
                <CardDescription>Enter the details of the new patient</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <Button className="w-full mt-4">Add Patient</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="existing-patients">
            <Card>
              <CardHeader>
                <CardTitle>Existing Patients</CardTitle>
                <CardDescription>View and manage your patients</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Date of Birth</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>1990-01-01</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Results
                        </Button>
                      </TableCell>
                    </TableRow>
                    {/* Add more rows as needed */}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}