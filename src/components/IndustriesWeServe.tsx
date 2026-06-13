"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

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
    <section id="industries" className="py-24 lg:py-32 bg-brand-dark border-t border-white/5 relative overflow-clip">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-6 md:gap-x-8">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
            >
              <Tilt 
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                perspective={1000} 
                scale={1.02} 
                transitionSpeed={2000}
                className="group relative bg-[#121212] border border-white/5 hover:border-brand-primary/30 p-8 pt-16 rounded-2xl flex flex-col items-center text-center transition-colors duration-500 hover:bg-[#1A1A1A] hover:shadow-2xl hover:shadow-brand-primary/10 mt-12 h-full"
              >
                {/* Floating Image overlapping the card */}
                <div 
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-52 h-52 pointer-events-none drop-shadow-2xl"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <Image 
                    src={industry.imageSrc} 
                    alt={industry.name} 
                    fill 
                    className="object-contain"
                  />
                </div>

                <h3 
                  className="font-heading text-xl md:text-2xl font-medium tracking-tight text-brand-light uppercase mt-6"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {industry.name}
                </h3>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
