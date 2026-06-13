"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IndustriesWeServe() {
  const industries = [
    { name: "Automotive & Ancillary", imageSrc: "/industries/automotive_transparent.png" },
    { name: "Construction & Farm Equipment", imageSrc: "/industries/construction_transparent.png" },
    { name: "Oil & Gas", imageSrc: "/industries/oil_rig_transparent.png" },
    { name: "Medical", imageSrc: "/industries/medical_transparent.png" },
    { name: "Aerospace", imageSrc: "/industries/aerospace_transparent.png" },
    { name: "Precision & General Fasteners", imageSrc: "/industries/fasteners_transparent.png" },
  ];

  return (
    <section id="industries" className="min-h-screen flex flex-col justify-center py-12 lg:py-16 bg-brand-dark border-t border-white/5 relative overflow-clip">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase text-brand-light mb-4">
            Industries We<br />
            <span className="text-brand-light/40">Serve</span>
          </h2>
          <div className="w-12 h-px bg-brand-primary/50 mx-auto mb-6" />
          <p className="text-brand-light/60 max-w-2xl mx-auto text-base lg:text-lg font-light tracking-wide">
            Delivering precision-engineered solutions tailored for the demanding requirements of specialized global sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-20 gap-x-4 md:gap-x-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              className="group relative bg-[#121212] border border-white/5 hover:border-brand-primary/30 p-6 pt-12 rounded-2xl flex flex-col items-center text-center transition-colors duration-500 hover:bg-[#1A1A1A] hover:shadow-2xl hover:shadow-brand-primary/10 mt-8 h-full"
            >
              {/* Floating Image overlapping the card */}
              <div 
                className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 pointer-events-none drop-shadow-2xl group-hover:-translate-y-3 transition-transform duration-500"
              >
                <Image 
                  src={industry.imageSrc} 
                  alt={industry.name} 
                  fill 
                  className="object-contain"
                />
              </div>

              <h3 
                className="font-heading text-lg md:text-xl font-medium tracking-tight text-brand-light uppercase mt-4"
              >
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
