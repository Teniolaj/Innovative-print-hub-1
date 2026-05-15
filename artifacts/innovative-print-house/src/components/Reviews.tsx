import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Akkshay Singh",
      role: "Local Guide",
      content: "Really happy with the service. The team was helpful, prompt, and delivered exactly what was promised.",
      time: "3 months ago",
      initials: "AS"
    },
    {
      id: 2,
      name: "Olivia Dansowaah Ofosu",
      role: "Customer",
      content: "Their customer service are good and they are good in person. I recommend them to you guys.",
      time: "4 months ago",
      initials: "OD"
    },
    {
      id: 3,
      name: "Kweku Essamuah",
      role: "Customer",
      content: "Courteous staff. Prompt service delivery.",
      time: "2 months ago",
      initials: "KE"
    }
  ];

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
          </motion.div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={idx === 2 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="h-full bg-card border-white/5 hover:border-white/10 transition-colors">
                  <CardContent className="p-6 relative">
                    <Quote className="absolute top-6 right-6 text-white/5" size={48} />
                    <div className="flex text-primary mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} className="fill-primary" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 relative z-10 leading-relaxed min-h-[80px]">
                      "{review.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-white/10">
                        <AvatarFallback className="bg-primary/20 text-primary font-bold">{review.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-bold text-white">{review.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{review.role}</span>
                          <span>•</span>
                          <span>{review.time}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
