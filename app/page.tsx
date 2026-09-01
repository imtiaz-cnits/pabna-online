import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FtpSection from "@/components/FtpSection";
import IptvSection from "@/components/IptvSection";
import PricingSection from "@/components/PricingSection";
import BkashSection from "@/components/BkashSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <FtpSection />
        <IptvSection />
        <PricingSection />
        <BkashSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
