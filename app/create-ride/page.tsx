"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Clock, Car, DollarSign } from "lucide-react"
import Link from "next/link"

export default function CreateRidePage() {
  const [seats, setSeats] = useState("2")
  const [price, setPrice] = useState("")
  const [recurring, setRecurring] = useState(false)

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
              <Link href="/create-ride" className="text-blue-600 font-medium">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Offer a Ride</h1>
          <p className="text-gray-600">Share your journey and help others reach their destination</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Ride Details</CardTitle>
                <CardDescription>Provide information about your upcoming trip</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Route Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    Route
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="from">From</Label>
                      <Input id="from" placeholder="Starting location" />
                    </div>
                    <div>
                      <Label htmlFor="to">To</Label>
                      <Input id="to" placeholder="Destination" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="stops">Additional Stops (Optional)</Label>
                    <Input id="stops" placeholder="Any stops along the way" />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    Schedule
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Departure Time</Label>
                      <Input id="time" type="time" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="recurring" checked={recurring} onCheckedChange={setRecurring} />
                    <Label htmlFor="recurring">This is a recurring trip</Label>
                  </div>
                  {recurring && (
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="weekdays">Weekdays only</SelectItem>
                        <SelectItem value="weekends">Weekends only</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>

                {/* Vehicle and Capacity */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Car className="h-5 w-5 mr-2 text-blue-600" />
                    Vehicle Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vehicle">Vehicle Make & Model</Label>
                      <Input id="vehicle" placeholder="e.g., Toyota Camry" />
                    </div>
                    <div>
                      <Label htmlFor="color">Color</Label>
                      <Input id="color" placeholder="e.g., Blue" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="seats">Available Seats</Label>
                    <Select value={seats} onValueChange={setSeats}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 seat</SelectItem>
                        <SelectItem value="2">2 seats</SelectItem>
                        <SelectItem value="3">3 seats</SelectItem>
                        <SelectItem value="4">4 seats</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                    Pricing
                  </h3>
                  <div>
                    <Label htmlFor="price">Price per seat ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="0.00"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <p className="text-sm text-gray-600 mt-1">Suggested price: $8-15 based on distance</p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Additional Information</h3>
                  <div>
                    <Label htmlFor="notes">Notes for Passengers (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special instructions, preferences, or additional details..."
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="smoking" />
                      <Label htmlFor="smoking">No smoking</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pets" />
                      <Label htmlFor="pets">Pets allowed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="music" />
                      <Label htmlFor="music">Music/conversation welcome</Label>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <Button className="flex-1">Publish Ride</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ride Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Route:</span>
                    <span>From → To</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span>Select date</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span>Select time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seats:</span>
                    <span>{seats} available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold">${price || "0"} per seat</span>
                  </div>
                  {price && (
                    <div className="flex justify-between text-green-600">
                      <span>Total earnings:</span>
                      <span className="font-semibold">
                        ${(Number.parseFloat(price) * Number.parseInt(seats)).toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tips for Success</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Be punctual and communicate clearly</li>
                  <li>• Set fair prices based on distance</li>
                  <li>• Keep your vehicle clean and comfortable</li>
                  <li>• Respond to booking requests quickly</li>
                  <li>• Build trust with detailed profiles</li>
                </ul>
              </CardContent>
            </Card>

            {/* Safety Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">Your safety and that of your passengers is our priority.</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Verify passenger identity</li>
                  <li>• Share trip details with someone</li>
                  <li>• Trust your instincts</li>
                  <li>• Use in-app messaging</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
