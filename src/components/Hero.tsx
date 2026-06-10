"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial Gradient to fade grid */}
      <div className="absolute inset-0 bg-brand-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Meshing Gears Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-brand-primary"
        >
          <Settings size={500} strokeWidth={1} />
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 -top-32 text-brand-accent/50"
        >
          <Settings size={300} strokeWidth={1} />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card/50 backdrop-blur-sm border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
          <span className="text-xs font-medium tracking-widest text-brand-light/80 uppercase">Precision Manufacturing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-brand-light mb-6"
        >
          GRACE <br className="md:hidden" />
          <span className="text-brand-primary">ENGINEERING</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-3xl text-brand-light/70 max-w-3xl mx-auto font-light mb-12"
        >
          Precision Products Through Innovative Manufacturing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#products"
            className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg font-medium transition-colors shadow-[0_0_20px_rgba(0,119,182,0.3)] hover:shadow-[0_0_30px_rgba(0,119,182,0.5)]"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-brand-light border border-white/10 rounded-lg font-medium transition-colors backdrop-blur-sm"
          >
            Request Quote
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-light/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-brand-light/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
