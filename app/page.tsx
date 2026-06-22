import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTAFormSection from "@/components/Ctaform";
import PlatformsSection from "@/components/Platform";
import ServicesSection from "@/components/Service";
import CTABannerSection from "@/components/Ctabanner";
import HowItWorksSection from "@/components/HowItWorks";
import TestimonialsSection from "@/components/Testimonials";
import FooterSection from "@/components/Footer";
import PortfolioSection from "@/components/Portfolio";
import ContactPage from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CTAFormSection />
      <About />
      <PlatformsSection />
      <ServicesSection />
      <CTABannerSection />
      <HowItWorksSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactPage />
      <FooterSection />
    </main>
  );
}