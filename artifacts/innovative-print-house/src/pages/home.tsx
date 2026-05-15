import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsVision from "@/components/StatsVision";
import OurWorks from "@/components/OurWorks";
import Reviews from "@/components/Reviews";
import ContactQuote from "@/components/ContactQuote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col w-full bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Services />
        <WhyChooseUs />
        <StatsVision />
        <OurWorks />
        <Reviews />
        <ContactQuote />
      </main>
      <Footer />
    </div>
  );
}
