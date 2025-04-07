import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, User } from "lucide-react"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  // Double-check authentication on the server side
  if (!session) {
    redirect("/login")
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {session.user?.image ? (
              <img
                src={session.user.image || "/placeholder.svg"}
                alt={session.user.name || "User"}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <User className="w-8 h-8 p-1 bg-gray-100 rounded-full" />
            )}
            <span>{session.user?.name}</span>
          </div>
          <form action="/api/auth/signout" method="POST">
            <Button variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </Button>
          </form>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, {session.user?.name}!</CardTitle>
            <CardDescription>You're now signed in with your Google account.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Your email: {session.user?.email}</p>
            <p className="mt-2">User ID: {session.user?.id}</p>
          </CardContent>
        </Card>

        {/* Add more dashboard cards here */}
      </div>
    </div>
  )
}

