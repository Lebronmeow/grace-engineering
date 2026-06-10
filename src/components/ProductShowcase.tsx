"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductShowcase() {
  const categories = [
    {
      title: "Fasteners",
      description: "High-tensile bolts, nuts, and screws.",
      imageText: "01",
    },
    {
      title: "Pipe Fittings",
      description: "Precision flanges, elbows, and tees.",
      imageText: "02",
    },
    {
      title: "CNC Components",
      description: "Custom machined parts to exact specs.",
      imageText: "03",
    },
    {
      title: "Automotive",
      description: "Critical components for vehicles.",
      imageText: "04",
    },
  ];

  return (
    <section id="services" className="min-h-screen py-24 lg:py-32 flex flex-col justify-center bg-black border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,119,182,0.03)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-white mb-4 md:mb-6">
              Core<br />
              <span className="text-white/40">Services</span>
            </h2>
            <p className="text-white/50 max-w-xl text-lg font-light tracking-wide">
              Engineered to exact specifications. Discover our manufacturing categories designed for uncompromising industrial applications.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pb-4"
          >
            <Link 
              href="#services" 
              className="group inline-flex items-center gap-4 text-white uppercase tracking-widest text-sm font-medium hover:text-brand-primary transition-colors"
            >
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">View Catalog</span>
                <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-brand-primary">View Catalog</span>
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
        
        <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 -mx-6 px-6 hide-scrollbar cursor-grab active:cursor-grabbing">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden bg-black border border-white/5 p-8 flex flex-col justify-between min-h-[320px] min-w-[280px] md:min-w-[400px] shrink-0 snap-center`}
            >
              {/* Hover effect glow */}
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/[0.02] transition-colors duration-700 ease-out" />
              
              <div className="relative z-10 flex justify-between items-start mb-6 md:mb-12">
                <span className="text-white/20 font-heading text-4xl lg:text-5xl font-light tracking-tighter">
                  {cat.imageText}
                </span>
                <div className="w-2 h-2 rounded-full bg-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="relative z-10 mt-auto">
                <h3 className="font-heading text-3xl font-medium tracking-tight mb-3 text-white">
                  {cat.title}
                </h3>
                <p className="text-white/50 text-sm tracking-wide font-light max-w-sm">
                  {cat.description}
                </p>
              </div>

              {/* Minimal structural lines */}
              <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 w-px h-16 bg-gradient-to-b from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
