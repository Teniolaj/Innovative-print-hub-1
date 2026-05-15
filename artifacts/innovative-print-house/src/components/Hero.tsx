import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "../assets/images/hero-bg.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})`, transformOrigin: "center center" }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.18 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-start justify-center">
        <div className="max-w-3xl space-y-8">
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
              data-testid="button-get-quote-hero"
              className="bg-primary text-black hover:bg-primary/90 text-base font-bold px-8 h-14 rounded-md w-full sm:w-auto"
              onClick={() => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              data-testid="button-view-services-hero"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white text-base font-semibold px-8 h-14 rounded-md w-full sm:w-auto"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
