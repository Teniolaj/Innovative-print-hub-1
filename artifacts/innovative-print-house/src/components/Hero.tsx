import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import heroBg from "../assets/images/hero-bg.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        {/* Gradients to darken background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-start justify-center">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">#1 Print House in Kumasi</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] uppercase"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">Printing & Branding</span> in Kumasi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl font-medium"
          >
            Where bold ideas become tangible reality. We serve businesses, churches, schools, and individuals across Ghana who want their brand to stand out with vivid ink and precision craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
          >
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 text-base font-bold px-8 h-14 rounded-md w-full sm:w-auto"
              onClick={() => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white text-base font-semibold px-8 h-14 rounded-md w-full sm:w-auto"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 pt-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Customer ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} className={star <= 4 ? "fill-primary text-primary" : "fill-primary/20 text-primary/20"} />
                ))}
                <span className="text-sm font-bold text-white ml-2">4.6</span>
              </div>
              <span className="text-xs text-gray-400">from 39 Reviews</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
