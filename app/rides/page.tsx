"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Users, Star, Filter, Car, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RidesPage() {
  const [sortBy, setSortBy] = useState("time")
  const [priceRange, setPriceRange] = useState("all")

  const rides = [
    {
      id: 1,
      from: "Downtown Plaza",
      to: "International Airport",
      time: "2:30 PM",
      date: "Today",
      price: 15,
      seats: 2,
      totalSeats: 4,
      driver: "Sarah Mitchell",
      rating: 4.9,
      reviews: 127,
      duration: "45 min",
      carModel: "Toyota Camry",
      verified: true,
    },
    {
      id: 2,
      from: "University Campus",
      to: "Shopping Mall",
      time: "6:00 PM",
      date: "Today",
      price: 8,
      seats: 3,
      totalSeats: 4,
      driver: "Mike Rodriguez",
      rating: 4.8,
      reviews: 89,
      duration: "25 min",
      carModel: "Honda Civic",
      verified: true,
    },
    {
      id: 3,
      from: "Business District",
      to: "Residential Hills",
      time: "5:45 PM",
      date: "Tomorrow",
      price: 12,
      seats: 1,
      totalSeats: 3,
      driver: "Emma Thompson",
      rating: 5.0,
      reviews: 203,
      duration: "35 min",
      carModel: "Nissan Altima",
      verified: true,
    },
    {
      id: 4,
      from: "Train Station",
      to: "Tech Park",
      time: "8:15 AM",
      date: "Tomorrow",
      price: 10,
      seats: 2,
      totalSeats: 4,
      driver: "David Chen",
      rating: 4.7,
      reviews: 156,
      duration: "30 min",
      carModel: "Hyundai Elantra",
      verified: true,
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
              <Link href="/rides" className="text-blue-600 font-medium">
                Find Rides
              </Link>
              <Link href="/create-ride" className="text-gray-700 hover:text-blue-600">
                Offer Ride
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="From" className="pl-10" defaultValue="Downtown" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="To" className="pl-10" defaultValue="Airport" />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input type="date" className="pl-10" />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="time">Departure Time</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Update Search
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-10">$0 - $10</SelectItem>
                  <SelectItem value="10-20">$10 - $20</SelectItem>
                  <SelectItem value="20+">$20+</SelectItem>
                </SelectContent>
              </Select>
              <Badge variant="secondary" className="cursor-pointer">
                2+ seats available
              </Badge>
              <Badge variant="secondary" className="cursor-pointer">
                Verified drivers
              </Badge>
              <Badge variant="secondary" className="cursor-pointer">
                Instant booking
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Available Rides ({rides.length})</h1>
          <div className="text-sm text-gray-600">Showing results for today and tomorrow</div>
        </div>

        {/* Ride Listings */}
        <div className="space-y-4">
          {rides.map((ride) => (
            <Card key={ride.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Route and Time */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 text-lg font-semibold">
                          <span>{ride.from}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                          <span>{ride.to}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {ride.time} • {ride.date}
                          </span>
                          <span>Duration: {ride.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Driver Info */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">
                          {ride.driver
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{ride.driver}</span>
                          {ride.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span>
                            {ride.rating} ({ride.reviews} reviews)
                          </span>
                          <span>•</span>
                          <span>{ride.carModel}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seats and Price */}
                  <div className="flex flex-col justify-center">
                    <div className="text-center mb-3">
                      <div className="flex items-center justify-center space-x-2 mb-1">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="text-lg font-semibold">
                          {ride.seats} of {ride.totalSeats} seats
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">available</div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">${ride.price}</div>
                      <div className="text-sm text-gray-600">per person</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex flex-col justify-center">
                    <Link href={`/rides/${ride.id}`}>
                      <Button className="w-full mb-2">Book Now</Button>
                    </Link>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Rides
          </Button>
        </div>
      </div>
    </div>
  )
}
