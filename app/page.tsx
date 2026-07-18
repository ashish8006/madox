import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhySection from './components/WhySection'
import PartnersSection from './components/PartnersSection'
import TrustedBySection from './components/TrustedBySection'
import LogoStrip from './components/LogoStrip'
import PropertiesSection from './components/PropertiesSection'
import InsightsSection from './components/InsightsSection'
import ConsultationSection from './components/ConsultationSection'
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
      <WhySection />
      <PartnersSection />
      {/* <TrustedBySection /> */}
      <LogoStrip />
      <PropertiesSection />
      {/* <InsightsSection /> */}
    
      <ServicesSection />
        <ConsultationSection />
      {/* <AboutSection /> */}
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
