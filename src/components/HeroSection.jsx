import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=80"
          alt="Beautiful beach destination"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl">
          Discover the World&apos;s Most Amazing Places
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          Unforgettable travel experiences tailored just for you
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
            Plan Your Trip
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-primary border-white bg-white hover:bg-white hover:text-primary text-lg dark:border-black dark:bg-black/50 dark:text-white dark:hover:bg-black/50 dark:hover:text-white"
          >
            Explore Destinations
          </Button>
        </div>

        {/* Scroll Down Indicator */}
        <a
          href="#destinations"
          className="absolute bottom-10 animate-bounce"
          aria-label="Scroll to destinations"
        >
          <ChevronDown className="h-10 w-10 text-white" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
