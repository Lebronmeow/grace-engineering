"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IndustriesWeServe() {
  const industries = [
    { name: "Automotive & Ancillary", imageSrc: "/industries/automotive.png" },
    { name: "Construction & Farm Equipment", imageSrc: "/industries/construction.png" },
    { name: "Oil & Gas", imageSrc: "/industries/oil_rig.png" },
    { name: "Medical", imageSrc: "/industries/medical.png" },
    { name: "Aerospace", imageSrc: "/industries/aerospace.png" },
    { name: "Precision & General Fasteners", imageSrc: "/industries/fasteners.png" },
  ];

  return (
    <section id="industries" className="py-24 lg:py-32 bg-brand-dark border-t border-white/5 relative overflow-visible">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:mb-32 text-center"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-6 md:gap-x-8">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#121212] border border-white/5 hover:border-brand-primary/30 p-8 pt-16 rounded-2xl flex flex-col items-center text-center transition-all duration-500 hover:bg-[#1A1A1A] hover:shadow-2xl hover:shadow-brand-primary/5 mt-12"
            >
              {/* Floating Image overlapping the card with screen blend mode for pure black removal */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 group-hover:-translate-y-4 transition-transform duration-500 pointer-events-none drop-shadow-2xl mix-blend-screen">
                <Image 
                  src={industry.imageSrc} 
                  alt={industry.name} 
                  fill 
                  className="object-contain"
                />
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-brand-light uppercase mt-6">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
