"use client";

import { motion } from "framer-motion";
import { Clock, Box, ShieldCheck } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Clock className="w-6 h-6 text-white/40" />,
      value: "10+",
      label: "Years Experience",
      className: "lg:col-span-1 lg:row-span-2 flex-col justify-end text-center lg:text-left",
    },
    {
      icon: <Box className="w-6 h-6 text-white/40" />,
      value: "500+",
      label: "Services Delivered",
      className: "lg:col-span-2 lg:row-span-1 flex-row items-center justify-between",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white/40" />,
      value: "ISO 9001:2015",
      label: "Quality Certified",
      className: "lg:col-span-2 lg:row-span-1 flex-row items-center justify-between",
    },
  ];

  return (
    <section id="stats" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase text-white mb-6">
            By The<br />
            <span className="text-white/40">Numbers</span>
          </h2>
          <p className="text-white/50 max-w-xl text-lg font-light tracking-wide">
            Precision engineering backed by experience, delivering uncompromised quality components across global industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden bg-black border border-white/5 p-8 md:p-12 min-h-[250px] flex ${stat.className}`}
            >
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/[0.02] transition-colors duration-700 ease-out" />
              
              {stat.className.includes("flex-col") ? (
                <>
                  <div className="mb-auto flex justify-center lg:justify-start">
                    <div className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:border-brand-primary/50 transition-colors duration-500">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-7xl md:text-8xl font-heading font-medium tracking-tighter text-white mb-4">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-[0.2em] font-light">
                      {stat.label}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="text-5xl md:text-7xl font-heading font-medium tracking-tighter text-white mb-4">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-[0.2em] font-light">
                      {stat.label}
                    </div>
                  </div>
                  <div className="hidden sm:flex w-16 h-16 rounded-none border border-white/10 items-center justify-center bg-white/[0.02] group-hover:border-brand-primary/50 transition-colors duration-500">
                    {stat.icon}
                  </div>
                </>
              )}

              {/* Minimal structural lines */}
              <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
