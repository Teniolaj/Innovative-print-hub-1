import React, { useEffect } from "react";
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
  useEffect(() => {
    const hash = window.location.hash;
    let timer: NodeJS.Timeout | undefined;
    if (hash) {
      timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

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
