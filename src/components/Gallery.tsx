"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

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
        <div className="flex flex-col md:flex-row items-center gap-2 h-auto md:h-[600px] w-full">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(img)}
              className="relative group flex-grow transition-all w-full md:w-32 rounded-2xl overflow-hidden h-24 hover:h-64 md:h-full md:hover:h-full duration-500 md:hover:w-[800px] bg-brand-dark cursor-pointer"
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 cursor-pointer backdrop-blur-sm"
          >
            <button 
              className="absolute top-6 right-6 z-[110] text-white/50 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
              onClick={() => setSelectedImg(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImg.src} 
                alt={selectedImg.alt} 
                fill 
                className="object-contain bg-[#0A0A0A]"
              />
            </motion.div>
            <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
              <span className="text-white/80 font-heading tracking-widest uppercase text-sm font-medium bg-black/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
                {selectedImg.alt}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
