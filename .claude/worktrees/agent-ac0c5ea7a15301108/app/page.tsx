import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogoStrip from './components/LogoStrip'
import PropertiesSection from './components/PropertiesSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0a0908]">
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <PropertiesSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
