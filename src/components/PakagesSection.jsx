import React from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const packages = [
  {
    id: 1,
    name: "Basic Explorer",
    price: 999,
    description: "Perfect for budget travelers",
    features: [
      "3-star hotel accommodations",
      "Guided city tours",
      "Airport transfers",
      "24/7 customer support",
      "Breakfast included",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Premium Adventure",
    price: 1999,
    description: "Our most popular package",
    features: [
      "4-star hotel accommodations",
      "All Basic Explorer features",
      "Full-day excursions",
      "Half-board meal plan",
      "Priority booking for activities",
      "Welcome gift package",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Luxury Escape",
    price: 3999,
    description: "Ultimate travel experience",
    features: [
      "5-star luxury accommodations",
      "All Premium Adventure features",
      "Private tours and guides",
      "Full-board gourmet meals",
      "Spa treatment included",
      "Exclusive access to VIP events",
      "Personalized itinerary",
    ],
    popular: false,
  },
]

const PackagesSection = () => {
  return (
    <section id="packages" className="section-padding bg-white dark:bg-gray-950">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel Packages</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect travel package that fits your style and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative flex flex-col ${pkg.popular ? "border-primary shadow-lg dark:border-primary" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${pkg.price}</span>
                  <span className="text-gray-500 dark:text-gray-400"> / person</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`}>Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackagesSection
