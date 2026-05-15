import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, TrendingUp } from "lucide-react";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  description: string;
}

const stats: StatItem[] = [
  {
    target: 400,
    suffix: "+",
    label: "Businesses Served",
    icon: Building2,
    description: "We're committed to partnering with businesses across Kumasi, from startups to established retailers.",
  },
  {
    target: 1000,
    suffix: "+",
    label: "Individuals Supported",
    icon: Users,
    description: "Whether printing personal projects, event materials, or custom gifts, we've helped thousands bring their visions to life.",
  },
  {
    target: 100,
    suffix: "%",
    label: "Growth Partner",
    icon: TrendingUp,
    description: "Our core mission: help every business customer increase their revenue through professional branding and strategic printing solutions.",
  },
];

function AnimatedCounter({ target, suffix, triggered }: { target: number; suffix: string; triggered: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    setCount(0);
    const duration = 1000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [triggered, target]);

  return (
    <span className="text-4xl md:text-5xl font-black text-white tracking-tight tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsVision() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
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
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center py-6 md:py-0 px-4"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="mb-2">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} triggered={isInView} />
                </div>
                <p className="text-lg text-gray-300 font-medium uppercase tracking-wider mb-3">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
