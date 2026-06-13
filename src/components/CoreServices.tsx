"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function CoreServices() {
  const capabilities = [
    {
      num: "01",
      title: "CNC & VMC Precision Machining",
      desc: "High-precision CNC turning and VMC milling for complex components, delivering tight tolerances across small and high-volume production runs.",
    },
    {
      num: "02",
      title: "Design & Fabrication",
      desc: "End-to-end design support and metal fabrication services tailored to client specifications, from prototyping to finished parts.",
    },
    {
      num: "03",
      title: "Tools & Die Mold",
      desc: "Custom tooling, dies, and molds engineered for durability and repeatable accuracy in production processes.",
    },
    {
      num: "04",
      title: "Quality Control",
      desc: "Rigorous in-house inspection and quality checks at every stage to ensure parts meet exact specifications and industry standards.",
    },
  ];

  return (
    <section id="services" className="min-h-screen py-24 flex flex-col justify-center bg-black relative border-t border-white/5">
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-brand-primary/20 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 text-center md:text-left flex flex-col items-center md:items-start gap-6"
        >
          <h2 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase text-white leading-none">
            Core<br />
            <span className="text-white/40">Services</span>
          </h2>
          <div className="w-16 h-px bg-brand-primary/50" />
          <p className="text-white/50 text-lg font-light tracking-wide max-w-2xl">
            We specialize in manufacturing complex and intricate parts with industry-leading precision and uncompromising quality standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                className="group relative flex flex-col sm:flex-row items-start gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-primary/40 hover:bg-white/10 transition-colors duration-500 h-full shadow-2xl shadow-black/50"
              >
                <div 
                  className="text-5xl sm:text-6xl font-heading font-light tracking-tighter text-white/20 group-hover:text-brand-primary/50 transition-colors duration-500"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {cap.num}
                </div>
                
                <div 
                  className="flex-1 sm:pl-6 sm:border-l border-white/10 group-hover:border-brand-primary/50 transition-colors duration-500"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight mb-3 text-white uppercase group-hover:text-brand-accent transition-colors duration-500">
                    {cap.title}
                  </h3>
                  <p className="text-white/50 text-sm sm:text-base font-light tracking-wide leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {cap.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
