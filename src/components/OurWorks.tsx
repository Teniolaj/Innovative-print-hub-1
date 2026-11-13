import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { featuredWorks } from "@/data/works";
import SectionHeading from "@/components/SectionHeading";

export default function OurWorks() {
  return (
    <section id="works" className="py-24 bg-card border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <SectionHeading label="Selected projects">Our works</SectionHeading>
            <p className="text-gray-400 text-lg">
              A glimpse into the tangible reality we've crafted for our clients. Quality speaks louder than words.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/works">
              <Button
                data-testid="button-view-more-works"
                className="bg-primary text-black hover:bg-primary/90 font-bold px-6 h-12 flex items-center gap-2 whitespace-nowrap"
              >
                View More Works
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorks.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-background border border-white/10"
            >
              <Link
                href={`/works?category=${encodeURIComponent(work.category)}`}
                className="relative block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                aria-label={`View ${work.category} works`}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{work.category}</h3>
                      <p className="text-sm text-gray-300">{work.title}</p>
                    </div>
                    <ArrowUpRight className="shrink-0 text-primary" size={24} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Link href="/works">
            <Button
              data-testid="button-view-more-works-bottom"
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary hover:text-black font-bold px-10 h-13 flex items-center gap-2 text-base"
            >
              View More of Our Works
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
