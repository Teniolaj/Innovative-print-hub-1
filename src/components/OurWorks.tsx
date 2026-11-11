import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { latestWorks } from "@/data/latestWorks";
import SectionHeading from "@/components/SectionHeading";

const works = [
  ...latestWorks,
  { id: 1, title: "Premium Corporate Hoodies", category: "Apparel", image: "/works/print-work-1.jpg" },
  { id: 2, title: "Large Format Banners", category: "Graphic Design", image: "/works/print-work-2.jpg" },
  { id: 3, title: "Sleek Business Cards & Stationery", category: "Branding", image: "/works/print-work-3.jpg" },
  { id: 4, title: "Eco-Friendly Tote Bags", category: "Packaging", image: "/works/print-work-4.jpg" },
  { id: 5, title: "Custom Printed Mugs", category: "Corporate Gifts", image: "/works/print-work-5.jpg" },
  { id: 6, title: "Exclusive Hardcover Notebooks", category: "Corporate Gifts", image: "/works/print-work-6.jpg" },
];

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
          {works.slice(0, 9).map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-background border border-white/10"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                    {work.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {work.title}
                  </h3>
                  <Link href="/works">
                    <button
                      data-testid={`button-work-view-${work.id}`}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors backdrop-blur-sm mt-4 cursor-pointer"
                    >
                      <Search size={18} />
                    </button>
                  </Link>
                </div>
              </div>
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
