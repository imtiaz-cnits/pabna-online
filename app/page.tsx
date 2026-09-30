import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import FtpSection from "@/components/FtpSection";
import IptvSection from "@/components/IptvSection";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import BkashSection from "@/components/BkashSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-600 selection:text-white">
      <ScrollRevealProvider />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <WhyChooseUs />
        <ServicesSection />
        <FtpSection />
        <IptvSection />
        <PricingSection />
        <HowItWorks />
        <BkashSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
