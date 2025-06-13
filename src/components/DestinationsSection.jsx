"use client"

import React, { useState } from 'react'
import { Search } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    description: "Tropical paradise with stunning beaches and vibrant culture",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    category: "beach",
  },
  {
    id: 2,
    name: "Santorini, Greece",
    description: "Iconic white buildings with breathtaking Mediterranean views",
    image: "https://images.unsplash.com/photo-1504198266285-165a16e1fdda?auto=format&fit=crop&w=1920&q=80",
    category: "island",
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    description: "Ancient temples and beautiful cherry blossoms",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1920&q=80",
    category: "cultural",
  },
  {
    id: 4,
    name: "Swiss Alps",
    description: "Majestic mountains perfect for hiking and winter sports",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
    category: "mountain",
  },
  {
    id: 5,
    name: "Marrakech, Morocco",
    description: "Vibrant markets and rich history in North Africa",
    image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=1920&q=80",
    category: "cultural",
  },
  {
    id: 6,
    name: "Machu Picchu, Peru",
    description: "Ancient Incan citadel set against a breathtaking mountain backdrop",
    image: "https://images.unsplash.com/photo-1604085571282-3c9e3c891215?auto=format&fit=crop&w=1920&q=80",
    category: "historical",
  },
]



const DestinationsSection = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="destinations" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container  max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our handpicked selection of the world&apos;s most breathtaking locations
          </p>

          {/* Search Input */}
          <div className="relative max-w-md mx-auto mt-8">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"><Search /></span>
            <input
              type="text"
              placeholder="Search destinations..."
              className="pl-10 w-full px-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-sm text-white/80 mb-4">{destination.description}</p>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm rounded-md transition-opacity opacity-0 group-hover:opacity-100">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">No destinations found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default DestinationsSection
