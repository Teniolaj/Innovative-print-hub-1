import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, PenTool, BookOpen, Printer, Shirt, Gift } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Corporate Branding",
      description: "Elevate your business identity with cohesive, professional branding materials that command respect.",
      icon: Briefcase,
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      title: "Graphic Design",
      description: "Stunning visuals and layouts crafted by expert designers to make your boldest ideas a reality.",
      icon: PenTool,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Corporate Diary",
      description: "Premium, custom-designed corporate diaries and notebooks for your team and loyal clients.",
      icon: BookOpen,
      color: "text-magenta-400", // Magenta tone
      bg: "bg-fuchsia-500/10"
    },
    {
      title: "Digital Printing",
      description: "High-resolution, rapid-turnaround digital printing for flyers, posters, and marketing collateral.",
      icon: Printer,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10"
    },
    {
      title: "T-shirt Printing",
      description: "Vibrant, durable custom apparel printing for events, teams, and promotional campaigns.",
      icon: Shirt,
      color: "text-orange-400",
      bg: "bg-orange-400/10"
    },
    {
      title: "Souvenirs / Gift Items",
      description: "Memorable branded merchandise including mugs, pens, and custom gifts for every occasion.",
      icon: Gift,
      color: "text-green-400",
      bg: "bg-green-400/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-card relative z-10 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading label="Printing & branding">Our services</SectionHeading>
          <p className="text-gray-400 text-lg">
            From concept to finished product, we provide end-to-end printing and branding solutions with unmatched precision.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-background/50 border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className={`w-7 h-7 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-gray-400 text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
