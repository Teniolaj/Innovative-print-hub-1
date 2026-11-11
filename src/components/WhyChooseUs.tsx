import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function WhyChooseUs() {
  const reasons = [
    {
      num: "01",
      title: "Unmatched Print Quality",
      desc: "We use state-of-the-art technology and premium materials to ensure every print is sharp, vibrant, and durable."
    },
    {
      num: "02",
      title: "Rapid Turnaround",
      desc: "Deadlines matter. We are committed to delivering your projects on time without ever compromising on quality."
    },
    {
      num: "03",
      title: "Local Expertise",
      desc: "Proudly based in Kumasi, we understand the local market and tailor our services to help you stand out here."
    },
    {
      num: "04",
      title: "Affordable Excellence",
      desc: "Top-tier branding shouldn't break the bank. We offer competitive pricing for premium printing solutions."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10 md:mb-12"
          >
            <SectionHeading label="The Innovative difference">
              Why Kumasi trusts Innovative Print House
            </SectionHeading>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              We don't just print; we partner with you to bring your vision to life. Our dedication to craftsmanship has made us the go-to print shop for businesses and individuals alike.
            </p>

          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6 items-stretch">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {reasons.map((reason, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-card/50 p-6 md:p-7 group hover:border-primary/25 transition-colors">
                  <div className="mb-5">
                    <span className="text-xs font-semibold tracking-widest text-primary">
                      {reason.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-w-0"
          >
            <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-primary/20 flex items-center justify-center px-6 py-10 md:p-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
                  <CheckCircle2 size={28} aria-hidden="true" />
                </div>
                <p className="text-6xl xl:text-7xl font-bold text-white tracking-tight mb-3">
                  100%
                </p>
                <h3 className="text-lg font-semibold text-primary">
                  Quality guaranteed
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs mx-auto">
                  Every print job undergoes rigorous quality checks before it reaches your hands.
                </p>
              </div>
            </div>
          </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
