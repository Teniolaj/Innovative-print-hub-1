import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const reviews = [
  {
    id: 1,
    name: "Akkshay Singh",
    role: "Local Guide",
    content: "Really happy with the service. The team was helpful, prompt, and delivered exactly what was promised.",
    time: "3 months ago",
    initials: "AS",
  },
  {
    id: 2,
    name: "Olivia Dansowaah Ofosu",
    role: "Customer",
    content: "Their customer service are good and they are good in person. I recommend them to you guys.",
    time: "4 months ago",
    initials: "OD",
  },
  {
    id: 3,
    name: "Kweku Essamuah",
    role: "Customer",
    content: "Courteous staff. Prompt service delivery.",
    time: "2 months ago",
    initials: "KE",
  },
];

const SLIDE_INTERVAL = 4000;

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(((index % reviews.length) + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, SLIDE_INTERVAL);
  }, [next]);

  useEffect(() => {
    timerRef.current = setInterval(next, SLIDE_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  const handleManualNav = (fn: () => void) => {
    fn();
    resetTimer();
  };

  const getIndex = (offset: number) =>
    ((current + offset) % reviews.length + reviews.length) % reviews.length;

  return (
    <section id="reviews" className="py-16 md:py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:grid-rows-[auto_1fr] items-start gap-y-6 lg:gap-x-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 min-w-0 lg:col-start-1 lg:row-start-1 lg:pt-3"
          >
            <SectionHeading label="Client experiences">Customer reviews</SectionHeading>
            <p className="text-sm md:text-base leading-relaxed text-gray-400 max-w-sm">The care behind every print, in our customers' own words.</p>
          </motion.div>

          <div className="order-3 min-w-0 lg:col-start-1 lg:row-start-2">
            <div className="border-y border-white/10 py-6 mb-6">
              <div className="flex items-center gap-5">
                <div className="flex items-baseline gap-1.5"><span className="text-5xl font-bold tracking-tight text-white">4.6</span><span className="text-sm text-gray-500">/ 5</span></div>
                <div className="flex flex-col">
                  <div className="flex gap-1 text-primary mb-2" aria-label="Rated 4.6 out of 5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="relative block h-4 w-4">
                        <Star size={16} className="absolute inset-0 text-primary/30" aria-hidden="true" />
                        <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: s <= 4 ? "100%" : "60%" }}>
                          <Star size={16} className="fill-primary text-primary" aria-hidden="true" />
                        </span>
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 font-medium">from 39 reviews</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                data-testid="button-reviews-prev"
                aria-label="Previous review"
                className="border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary transition-colors"
                onClick={() => handleManualNav(prev)}
              >
                <ChevronLeft size={20} />
              </Button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    data-testid={`button-reviews-dot-${i}`}
                    aria-label={`Show review ${i + 1}`}
                    aria-current={i === current ? "true" : undefined}
                    onClick={() => { goTo(i); resetTimer(); }}
                    className="flex h-10 w-8 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-primary"
                  ><span className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-1.5 bg-white/25"}`} /></button>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                data-testid="button-reviews-next"
                aria-label="Next review"
                className="border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary transition-colors"
                onClick={() => handleManualNav(next)}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          <div className="order-2 min-w-0 relative lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div className="relative grid overflow-hidden rounded-2xl">
              {reviews.map((review, idx) => {
                const offset = ((idx - current + reviews.length) % reviews.length);
                const isActive = offset === 0;
                const isNext = offset === 1;
                const isPrev = offset === reviews.length - 1;

                return (
                  <motion.div
                    key={review.id}
                    className="col-start-1 row-start-1 min-w-0"
                    aria-hidden={!isActive}
                    initial={false}
                    animate={{
                      x: isActive ? "0%" : isNext ? "110%" : isPrev ? "-110%" : "110%",
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Card className="h-full rounded-2xl bg-gradient-to-br from-white/[0.05] to-card border-white/10 shadow-none">
                      <CardContent className="p-6 sm:p-8 xl:p-10 relative h-full flex flex-col justify-between gap-8">
                        <Quote className="absolute top-7 right-7 text-primary/10" size={48} aria-hidden="true" />
                        <div>
                          <div className="flex gap-1 text-primary mb-6" aria-label="5 out of 5 stars">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} size={18} className="fill-primary" />
                            ))}
                          </div>
                          <blockquote className="text-gray-100 text-lg sm:text-xl xl:text-2xl relative z-10 leading-relaxed font-medium max-w-2xl">
                            &ldquo;{review.content}&rdquo;
                          </blockquote>
                        </div>
                        <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                          <Avatar className="h-11 w-11 border border-primary/20 shrink-0">
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">{review.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-1">{review.name}</h4>
                            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
                              <span>{review.role}</span>
                              <span>•</span>
                              <span>{review.time}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[getIndex(1), getIndex(2)].map((idx) => (
                <button
                  type="button"
                  key={reviews[idx].id}
                  className="min-w-0 text-left rounded-xl border border-white/10 bg-card/40 p-5 cursor-pointer hover:border-primary/30 hover:bg-white/[0.04] transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label={`Read review by ${reviews[idx].name}`}
                  onClick={() => { goTo(idx); resetTimer(); }}
                >
                  <p className="text-sm leading-relaxed text-gray-400 line-clamp-2 mb-3">&ldquo;{reviews[idx].content}&rdquo;</p>
                  <span className="text-xs font-semibold text-gray-200">{reviews[idx].name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
