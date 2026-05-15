import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
    <section id="reviews" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4 tracking-tight">Customer Reviews</h2>
            <div className="w-20 h-1.5 bg-primary mb-8 rounded-full" />

            <div className="bg-card border border-white/10 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-6xl font-black text-white">4.6</h3>
                <div className="flex flex-col">
                  <div className="flex text-primary mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={20} className={s <= 4 ? "fill-primary" : "fill-primary/20 text-primary/20"} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 font-medium">from 39 reviews</span>
                </div>
              </div>
              <p className="text-gray-300">
                Our commitment to excellence is reflected in the trust and satisfaction of our clients across Kumasi.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                data-testid="button-reviews-prev"
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
                    onClick={() => { goTo(i); resetTimer(); }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-white/20"}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                data-testid="button-reviews-next"
                className="border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary transition-colors"
                onClick={() => handleManualNav(next)}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </motion.div>

          <div className="md:w-2/3 relative overflow-hidden">
            <div className="relative h-full min-h-[320px] md:min-h-[380px]">
              {reviews.map((review, idx) => {
                const offset = ((idx - current + reviews.length) % reviews.length);
                const isActive = offset === 0;
                const isNext = offset === 1;
                const isPrev = offset === reviews.length - 1;

                return (
                  <motion.div
                    key={review.id}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      x: isActive ? "0%" : isNext ? "110%" : isPrev ? "-110%" : "110%",
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Card className="h-full bg-card border-white/5">
                      <CardContent className="p-8 relative h-full flex flex-col justify-between">
                        <Quote className="absolute top-6 right-6 text-white/5" size={64} />
                        <div>
                          <div className="flex text-primary mb-6">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} size={18} className="fill-primary" />
                            ))}
                          </div>
                          <p className="text-gray-200 text-lg md:text-xl relative z-10 leading-relaxed font-medium mb-8">
                            "{review.content}"
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 border-2 border-primary/30">
                            <AvatarFallback className="bg-primary/20 text-primary font-bold text-base">{review.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-base font-bold text-white">{review.name}</h4>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
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

            <div className="mt-6 flex gap-3">
              {[getIndex(1), getIndex(2)].map((idx) => (
                <div
                  key={reviews[idx].id}
                  className="flex-1 rounded-xl border border-white/5 bg-card/40 p-4 cursor-pointer hover:border-white/10 transition-colors"
                  onClick={() => { goTo(idx); resetTimer(); }}
                >
                  <p className="text-xs text-gray-400 line-clamp-2 mb-2">"{reviews[idx].content}"</p>
                  <span className="text-xs font-semibold text-primary">{reviews[idx].name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
