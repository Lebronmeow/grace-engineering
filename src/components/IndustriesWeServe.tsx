"use client";

import { motion } from "framer-motion";
import { CarFront, Tractor, Flame, HeartPulse, Plane, Hexagon } from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    { name: "Automotive & Ancillary", icon: <CarFront className="w-8 h-8" /> },
    { name: "Construction & Farm Equipment", icon: <Tractor className="w-8 h-8" /> },
    { name: "Oil & Gas", icon: <Flame className="w-8 h-8" /> },
    { name: "Medical", icon: <HeartPulse className="w-8 h-8" /> },
    { name: "Aerospace", icon: <Plane className="w-8 h-8" /> },
    { name: "Precision & General Fasteners", icon: <Hexagon className="w-8 h-8" /> },
  ];

  return (
    <section id="industries" className="py-24 lg:py-32 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-brand-light mb-6">
            Industries We<br />
            <span className="text-brand-light/40">Serve</span>
          </h2>
          <div className="w-16 h-px bg-brand-primary/50 mx-auto mb-8" />
          <p className="text-brand-light/60 max-w-2xl mx-auto text-lg font-light tracking-wide">
            Delivering precision-engineered solutions tailored for the demanding requirements of specialized global sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-brand-card/50 border border-white/5 hover:border-brand-primary/30 p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-500 hover:bg-brand-card hover:shadow-2xl hover:shadow-brand-primary/5"
            >
              <div className="w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center text-brand-primary mb-6 border border-white/5 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-black transition-all duration-500">
                {industry.icon}
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-brand-light uppercase">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
