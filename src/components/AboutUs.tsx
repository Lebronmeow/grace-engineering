"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-black relative flex items-center min-h-[100dvh]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white mb-6">
            About <span className="text-white/40">Us</span>
          </h2>
          <div className="w-16 h-px bg-brand-primary/50 mx-auto mb-6" />
          <p className="text-white/60 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Precision engineering driven by innovation, quality, and a commitment to our partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-brand-primary/30 transition-colors duration-500"
          >
            <Users className="w-8 h-8 text-brand-primary mb-2" />
            <h3 className="font-heading text-2xl font-medium uppercase tracking-tight text-white">Who we are</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Established in 2014, Grace Engineering is one of the most modern-day machine workshops in Mumbai. We foster a spirit of continuous learning and innovation to reach new sectors like Medical, Aerospace, Oil & Gas, and Automotive by offering products that will change the present state of machine tools.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-brand-primary/30 transition-colors duration-500"
          >
            <Target className="w-8 h-8 text-brand-primary mb-2" />
            <h3 className="font-heading text-2xl font-medium uppercase tracking-tight text-white">What we do</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We specialize in manufacturing complex and intricate parts. Our flexible infrastructure runs both small and high-volume production, achieving elite levels of precision without compromising on quality at highly competitive pricing.
            </p>
          </motion.div>

          {/* Why We Do It */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-brand-primary/30 transition-colors duration-500"
          >
            <Award className="w-8 h-8 text-brand-primary mb-2" />
            <h3 className="font-heading text-2xl font-medium uppercase tracking-tight text-white">Why we do it</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We consider our partners, employees, and contributors as family, striving to maintain lifelong relationships. Our entrenched values, ethos, and honourable business conduct deliver the highest precision and value to your supply chain.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
