"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://i.pravatar.cc/200?img=12",
    rating: 5,
    text: "Our trip to Bali was absolutely magical! The accommodations were perfect, and our guide made sure we experienced the authentic culture. Will definitely book with Wanderlust again!",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Toronto, Canada",
    image: "https://i.pravatar.cc/200?img=33",
    rating: 5,
    text: "The Premium Adventure package exceeded all our expectations. From the hotels to the excursions, everything was top-notch. The memories we made will last a lifetime.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "London, UK",
    image: "https://i.pravatar.cc/200?img=45",
    rating: 4,
    text: "Our family trip to Japan was perfectly organized. The kids loved the cultural experiences, and we appreciated how smooth all the logistics were. Highly recommend!",
  },
  {
    id: 4,
    name: "Michael Patel",
    location: "Sydney, Australia",
    image: "https://i.pravatar.cc/200?img=56",
    rating: 5,
    text: "The Luxury Escape package was worth every penny. The personalized service and exclusive experiences made our honeymoon absolutely unforgettable.",
  },
]


const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCount >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, testimonials.length - visibleCount) : prevIndex - 1
    )
  }

  const visibleTestimonials = () => {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real experiences from travelers who have explored the world with us
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {visibleTestimonials().map((testimonial) => (
              <Card
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full shadow-md hidden md:flex"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full shadow-md hidden md:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>

        <div className="flex justify-center mt-6 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
