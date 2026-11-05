import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-6 leading-tight">
              Why Kumasi Trusts <br/>
              <span className="text-primary">Innovative Print House</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              We don't just print; we partner with you to bring your vision to life. Our dedication to craftsmanship has made us the go-to print shop for businesses and individuals alike.
            </p>

            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <span className="text-2xl font-black text-white/20 group-hover:text-primary transition-colors duration-300">
                      {reason.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-400">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden bg-card border border-white/10 aspect-square md:aspect-video flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 drop-shadow-lg">
                  100%
                </h3>
                <p className="text-2xl font-bold text-primary uppercase tracking-widest">
                  Quality Guaranteed
                </p>
                <p className="mt-4 text-gray-400 max-w-sm mx-auto">
                  Every print job undergoes rigorous quality checks before it reaches your hands.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
