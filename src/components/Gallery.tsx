"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1565515268393-27042aee46dd?q=80&w=1000&auto=format&fit=crop", alt: "Advanced CNC Milling Machine", span: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop", alt: "Workshop Overview", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&w=1000&auto=format&fit=crop", alt: "Precision Machined Gears", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop", alt: "Quality Inspection and Metrology", span: "md:col-span-2 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1611078831633-8c760cd5e2af?q=80&w=1000&auto=format&fit=crop", alt: "VMC Machining Process", span: "md:col-span-1 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop", alt: "Metal Fabrication and Welding", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop", alt: "Finished Precision Components", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-white mb-6">
            Facility &<br />
            <span className="text-white/40">Infrastructure</span>
          </h2>
          <div className="w-16 h-px bg-brand-primary/50 mb-8" />
          <p className="text-white/50 max-w-xl text-lg font-light tracking-wide">
            A glimpse into our state-of-the-art manufacturing facility in Vasai, showcasing our advanced CNC/VMC machinery and precision products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-xl bg-brand-dark ${img.span}`}
            >
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
                <span className="font-heading text-white tracking-widest uppercase text-sm font-medium">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
