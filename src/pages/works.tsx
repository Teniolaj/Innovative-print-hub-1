import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowLeft, X, ZoomIn, Calendar, Tag, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { latestWorks } from "@/data/latestWorks";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const allWorks = [
  ...latestWorks.map((work) => ({ ...work, client: "", date: "" })),
  {
    id: 1,
    title: "Premium Corporate Hoodies",
    category: "Apparel",
    image: "/works/print-work-1.jpg",
    description: "High-density screen printing on premium cotton fabrics. Durable, comfortable, and sharp corporate merchandise.",
    client: "TechSolutions Ghana",
    date: "May 2026",
  },
  {
    id: 2,
    title: "Large Format Exhibition Banners",
    category: "Graphic Design",
    image: "/works/print-work-2.jpg",
    description: "Vibrant and weather-resistant promotional roll-ups and outdoor billboard prints that demand attention.",
    client: "Global Expo Group",
    date: "April 2026",
  },
  {
    id: 3,
    title: "Sleek Business Cards & Stationery",
    category: "Branding",
    image: "/works/print-work-3.jpg",
    description: "Matte-laminated business cards with spot UV finish, letterheads, and customized presentation folders.",
    client: "Apex Law Chamber",
    date: "March 2026",
  },
  {
    id: 4,
    title: "Eco-Friendly Branded Tote Bags",
    category: "Packaging",
    image: "/works/print-work-4.jpg",
    description: "Reusable custom cotton tote bags featuring screen-printed corporate brand identity for eco-conscious campaigns.",
    client: "GreenEarth Initiative",
    date: "February 2026",
  },
  {
    id: 5,
    title: "Custom Printed Mugs & Souvenirs",
    category: "Corporate Gifts",
    image: "/works/print-work-5.jpg",
    description: "Premium sublimation mugs, custom keychains, and laser-engraved pens perfect for corporate events and giveaways.",
    client: "Consolidated Bank",
    date: "January 2026",
  },
  {
    id: 6,
    title: "Exclusive Hardcover Notebooks",
    category: "Corporate Gifts",
    image: "/works/print-work-6.jpg",
    description: "Custom debossed leatherette diaries and hardcover planners with gold foil detailing and silk ribbon markers.",
    client: "Prime Insurance",
    date: "December 2025",
  },
  {
    id: 7,
    title: "Luxury Custom Packaging Boxes",
    category: "Packaging",
    image: "/works/print-work-7.jpg",
    description: "Rigid magnetic closure boxes with custom velvet inserts, matte finishing, and hot foil stamped branding.",
    client: "Glow Cosmetics",
    date: "November 2025",
  },
  {
    id: 8,
    title: "Editorial Magazines & Catalogs",
    category: "Graphic Design",
    image: "/works/print-work-8.jpg",
    description: "Perfect-bound corporate brochures, annual reports, and high-gloss fashion magazines printed in stunning detail.",
    client: "Vogue West Africa",
    date: "October 2025",
  },
];

const categories = ["All", "Apparel", "Graphic Design", "Branding", "Corporate Gifts", "Packaging"];

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeWork, setActiveWork] = useState<typeof allWorks[0] | null>(null);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredWorks = allWorks.filter((work) => {
    const matchesCategory = selectedCategory === "All" || work.category === selectedCategory;
    const matchesSearch =
      work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-[100dvh] flex-col w-full bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full pt-[76px] md:pt-24 pb-20">
        {/* Header Hero Section */}
        <section className="relative py-10 md:py-24 bg-card/50 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-30" />
          <div className="container mx-auto px-5 md:px-6 relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-6 font-medium group">
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Printing in practice</p>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.15]">
              Our complete portfolio
            </h1>
            <p className="text-gray-400 text-base leading-relaxed md:text-lg max-w-2xl">
              Explore our complete collection of printing and branding works. We bring ideas to life with exceptional quality, state-of-the-art technology, and attention to detail.
            </p>
          </div>
        </section>

        {/* Filter and Search Section */}
        <section className="py-7 md:py-12 bg-background">
          <div className="container mx-auto px-5 md:px-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6 mb-5 md:mb-10">
              <div className="md:hidden">
                <label htmlFor="work-category" className="mb-2 block text-xs font-medium uppercase tracking-widest text-gray-400">Browse by category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger id="work-category" className="h-12 rounded-xl border-white/15 bg-card px-4 text-sm font-medium text-white focus:ring-primary [&>svg]:text-primary [&>svg]:opacity-100">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent position="popper" side="bottom" align="start" avoidCollisions={false} sideOffset={6} className="z-[60] max-h-[min(18rem,var(--radix-select-content-available-height))] rounded-xl border-white/15 bg-[#141414] p-1 shadow-2xl">
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat} className="min-h-11 rounded-lg px-3 pr-9 text-sm focus:bg-primary/10 focus:text-primary data-[state=checked]:text-primary">
                        {cat === "All" ? "All categories" : cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Category Pills */}
              <div className="hidden md:flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    aria-pressed={selectedCategory === cat}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-primary text-black shadow-lg shadow-primary/20 scale-105"
                        : "bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative max-w-md w-full lg:w-80">
                <input
                  type="text"
                  aria-label="Search portfolio works"
                  placeholder="Search works..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 w-full bg-card border border-white/15 rounded-xl px-4 py-3 pl-11 text-base md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              </div>
            </div>

            <p role="status" aria-live="polite" className="mb-5 text-xs text-gray-400 md:hidden">
              {filteredWorks.length} {filteredWorks.length === 1 ? "project" : "projects"}{selectedCategory !== "All" ? ` in ${selectedCategory}` : " to explore"}
            </p>
            {/* Works Grid */}
            {filteredWorks.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredWorks.map((work, idx) => (
                    <motion.div
                      key={work.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-card border border-white/5 hover:border-primary/20 transition-all duration-300"
                    >
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                            {work.category}
                          </span>
                          <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                            {work.title}
                          </h3>
                          <p className="text-gray-400 text-xs line-clamp-2 mb-4">
                            {work.description}
                          </p>
                          <Button
                            onClick={() => setActiveWork(work)}
                            className="bg-primary hover:bg-primary/90 text-black font-bold h-9 w-9 rounded-full flex items-center justify-center p-0"
                            aria-label="View details"
                          >
                            <ZoomIn size={16} />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="text-center py-20 bg-card/30 border border-white/5 rounded-2xl">
                <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  variant="link"
                  className="text-primary mt-2"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox / Details Modal */}
      <AnimatePresence>
        {activeWork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveWork(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors backdrop-blur-sm"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Image Container */}
              <div className="w-full md:w-3/5 bg-background flex items-center justify-center relative overflow-hidden h-64 md:h-auto">
                <img
                  src={activeWork.image}
                  alt={activeWork.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description Panel */}
              <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase mb-4">
                    <Tag size={12} />
                    {activeWork.category}
                  </span>
                  <h2 className="text-2xl font-black text-white uppercase mb-4 tracking-tight leading-tight">
                    {activeWork.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {activeWork.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10 text-xs">
                  {activeWork.date && <div className="flex justify-between items-center text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      Completed
                    </span>
                    <span className="text-white font-medium">{activeWork.date}</span>
                  </div>}
                  {activeWork.client && <div className="flex justify-between items-center text-gray-500">
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={12} />
                      Client
                    </span>
                    <span className="text-white font-medium">{activeWork.client}</span>
                  </div>}
                  <Button
                    onClick={() => {
                      setActiveWork(null);
                      document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-black font-bold h-11 mt-4"
                  >
                    Request Similar Print
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
