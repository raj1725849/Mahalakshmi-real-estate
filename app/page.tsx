import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import InteractiveHub from "@/components/sections/InteractiveHub";
import OfferBanner from "@/components/sections/OfferBanner";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import OwnerVision from "@/components/sections/OwnerVision";
import FAQ from "@/components/sections/FAQ";
import FUITestimonialWithSlide from "@/components/ui/sliding-testimonial";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <OfferBanner />
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturedProjectsSection />
      <InteractiveHub />
      <WhyUs />
      <Services />
      <OwnerVision />
      <FAQ />
      <FUITestimonialWithSlide />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}


