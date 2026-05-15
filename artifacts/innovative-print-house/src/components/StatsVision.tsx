import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, TrendingUp } from "lucide-react";

export default function StatsVision() {
  const stats = [
    {
      value: "400+",
      label: "Businesses Served",
      icon: Building2,
    },
    {
      value: "1000+",
      label: "Individuals Supported",
      icon: Users,
    },
    {
      value: "100%",
      label: "Growth Partner",
      icon: TrendingUp,
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-900/40 via-cyan-900/20 to-background z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center py-6 md:py-0"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-lg text-gray-300 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
