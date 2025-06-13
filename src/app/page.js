import ThemeProvider from "@/components/ThemeProvider"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import DestinationsSection from "@/components/DestinationsSection"
import PackagesSection from "@/components/PakagesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import FloatingChat from "@/components/FlotingChat"

const Home = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Navbar />
      <main>
        <HeroSection />
        <DestinationsSection />
        <PackagesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FloatingChat />
      <Footer />
    </ThemeProvider>
  )
}

export default Home
