"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Car,
  MapPin,
  Users,
  Star,
  Calendar,
  DollarSign,
  MessageCircle,
  Settings,
  Plus,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const upcomingRides = [
    {
      id: 1,
      type: "driver",
      from: "Downtown",
      to: "Airport",
      date: "Today",
      time: "2:30 PM",
      passengers: 2,
      totalSeats: 3,
      earnings: 30,
      status: "confirmed",
    },
    {
      id: 2,
      type: "passenger",
      from: "University",
      to: "Mall",
      date: "Tomorrow",
      time: "6:00 PM",
      driver: "Mike R.",
      cost: 8,
      status: "confirmed",
    },
  ]

  const rideHistory = [
    {
      id: 1,
      type: "driver",
      from: "Business District",
      to: "Residential Area",
      date: "Yesterday",
      passengers: 3,
      earnings: 36,
      rating: 4.8,
    },
    {
      id: 2,
      type: "passenger",
      from: "Airport",
      to: "Downtown",
      date: "2 days ago",
      driver: "Sarah M.",
      cost: 15,
      rating: 5.0,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">RideShare</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/rides" className="text-gray-700 hover:text-blue-600">
                Find Rides
              </Link>
              <Link href="/create-ride" className="text-gray-700 hover:text-blue-600">
                Offer Ride
              </Link>
              <Link href="/dashboard" className="text-blue-600 font-medium">
                Dashboard
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Manage your rides and track your journey</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="rides">My Rides</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Rides</p>
                      <p className="text-2xl font-bold">47</p>
                    </div>
                    <Car className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold text-green-600">$284</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Rating</p>
                      <p className="text-2xl font-bold">4.9</p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Upcoming</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/create-ride">
                    <Button className="w-full h-20 flex flex-col space-y-2">
                      <Plus className="h-6 w-6" />
                      <span>Offer New Ride</span>
                    </Button>
                  </Link>
                  <Link href="/rides">
                    <Button variant="outline" className="w-full h-20 flex flex-col space-y-2 bg-transparent">
                      <MapPin className="h-6 w-6" />
                      <span>Find Rides</span>
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full h-20 flex flex-col space-y-2 bg-transparent">
                    <MessageCircle className="h-6 w-6" />
                    <span>Messages</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Rides */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Rides</CardTitle>
                <CardDescription>Your next scheduled trips</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingRides.map((ride) => (
                    <div key={ride.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${ride.type === "driver" ? "bg-blue-100" : "bg-green-100"}`}>
                          {ride.type === "driver" ? (
                            <Car className="h-5 w-5 text-blue-600" />
                          ) : (
                            <Users className="h-5 w-5 text-green-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">
                            {ride.from} → {ride.to}
                          </div>
                          <div className="text-sm text-gray-600">
                            {ride.date} at {ride.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={ride.status === "confirmed" ? "default" : "secondary"}>{ride.status}</Badge>
                        <div className="text-sm text-gray-600 mt-1">
                          {ride.type === "driver" ? `$${ride.earnings}` : `$${ride.cost}`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Rides Tab */}
          <TabsContent value="rides" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Offered Rides</h2>
              <Link href="/create-ride">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Ride
                </Button>
              </Link>
            </div>

            <div className="grid gap-4">
              {[
                {
                  id: 1,
                  from: "Downtown Plaza",
                  to: "Airport",
                  date: "Today",
                  time: "2:30 PM",
                  seats: 2,
                  totalSeats: 3,
                  price: 15,
                  status: "active",
                  bookings: 2,
                },
                {
                  id: 2,
                  from: "University",
                  to: "Tech Park",
                  date: "Tomorrow",
                  time: "8:00 AM",
                  seats: 3,
                  totalSeats: 4,
                  price: 12,
                  status: "active",
                  bookings: 1,
                },
              ].map((ride) => (
                <Card key={ride.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold">
                            {ride.from} → {ride.to}
                          </h3>
                          <Badge variant={ride.status === "active" ? "default" : "secondary"}>{ride.status}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {ride.date} at {ride.time}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {ride.seats} of {ride.totalSeats} seats available
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />${ride.price} per seat
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                    {ride.bookings > 0 && (
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-800">
                          <CheckCircle className="h-4 w-4 inline mr-1" />
                          {ride.bookings} passenger{ride.bookings > 1 ? "s" : ""} booked
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <h2 className="text-2xl font-bold">My Bookings</h2>

            <div className="grid gap-4">
              {[
                {
                  id: 1,
                  from: "Airport",
                  to: "Downtown",
                  date: "Tomorrow",
                  time: "3:00 PM",
                  driver: "Sarah Mitchell",
                  cost: 15,
                  status: "confirmed",
                },
                {
                  id: 2,
                  from: "Mall",
                  to: "University",
                  date: "Friday",
                  time: "7:30 PM",
                  driver: "Mike Rodriguez",
                  cost: 8,
                  status: "pending",
                },
              ].map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold">
                            {booking.from} → {booking.to}
                          </h3>
                          <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {booking.date} at {booking.time}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />${booking.cost}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">Driver: {booking.driver}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="space-y-6">
            <h2 className="text-2xl font-bold">Earnings Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600 mb-2">This Week</p>
                    <p className="text-3xl font-bold text-green-600">$87</p>
                    <p className="text-sm text-gray-500">+12% from last week</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600 mb-2">This Month</p>
                    <p className="text-3xl font-bold text-green-600">$284</p>
                    <p className="text-sm text-gray-500">+8% from last month</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600 mb-2">Total Earned</p>
                    <p className="text-3xl font-bold text-green-600">$1,247</p>
                    <p className="text-sm text-gray-500">Since joining</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rideHistory
                    .filter((ride) => ride.type === "driver")
                    .map((ride) => (
                      <div key={ride.id} className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <div className="font-medium">
                            {ride.from} → {ride.to}
                          </div>
                          <div className="text-sm text-gray-600">
                            {ride.date} • {ride.passengers} passengers
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-600">+${ride.earnings}</div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                            {ride.rating}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
