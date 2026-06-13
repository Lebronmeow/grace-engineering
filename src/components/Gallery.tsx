"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/gallery/img1.jpg", alt: "Precision Components" },
    { src: "/gallery/img2.jpg", alt: "VMC Machine Process" },
    { src: "/gallery/img3.png", alt: "Quality Inspection" },
    { src: "/gallery/img4.png", alt: "Finished Precision Component" },
    { src: "/gallery/img5.png", alt: "Advanced CNC" },
  ];

  return (
    <section id="gallery" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white mb-6">
            Facility &<br />
            <span className="text-white/40">Infrastructure</span>
          </h2>
          <div className="w-16 h-px bg-brand-primary/50 mb-6" />
        </motion.div>

        {/* 21st.dev Image Gallery Component */}
        <div className="flex items-center gap-2 h-[400px] md:h-[600px] w-full">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group flex-grow transition-all w-16 md:w-32 rounded-2xl overflow-hidden h-full duration-500 hover:w-[400px] md:hover:w-[800px] bg-brand-dark cursor-pointer"
            >
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-8">
                <span className="font-heading text-white tracking-widest uppercase text-xs md:text-sm font-medium border-l-2 border-brand-primary pl-4 whitespace-nowrap overflow-hidden">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
