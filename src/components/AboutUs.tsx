"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ISO Certification Badge - Enlarged & Clickable */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center -mt-40 mb-24 relative z-20"
        >
          <a 
            href="/iso-certificate-placeholder.pdf" // Placeholder link
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
          >
            <div className="absolute -inset-4 bg-brand-primary/20 blur-xl rounded-full group-hover:bg-brand-primary/40 transition-colors duration-700 pointer-events-none" />
            <div className="relative bg-brand-dark border border-brand-primary/30 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(232,212,77,0.1)] group-hover:shadow-[0_0_80px_rgba(232,212,77,0.2)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
              <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-brand-primary mb-6" />
              <h3 className="font-heading text-2xl md:text-4xl font-bold tracking-tighter text-white uppercase mb-2">
                ISO 9001:2015
              </h3>
              <p className="text-brand-primary tracking-widest text-sm md:text-base font-medium uppercase mb-4">
                Certified Firm
              </p>
              <span className="text-white/40 text-xs md:text-sm uppercase tracking-[0.2em] group-hover:text-white/80 transition-colors">
                View Certificate →
              </span>
            </div>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Header */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-32"
            >
              <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-white mb-6">
                About<br />
                <span className="text-white/40">Us</span>
              </h2>
              <div className="w-16 h-px bg-brand-primary/50 mb-8" />
              <p className="text-white/60 text-xl font-light tracking-wide leading-relaxed">
                Precision engineering driven by innovation, quality, and a commitment to our partners.
              </p>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            
            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-brand-primary" />
                <h3 className="font-heading text-3xl font-medium uppercase tracking-tight text-white">Who we are</h3>
              </div>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-6">
                Grace Engineering is one of the most modern-day machine workshops in Mumbai, established in 2014. We believe in building long-term relationships and want to serve our customers as efficiently as possible while adding the most value to their supply chain.
              </p>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                We believe in fostering a spirit of continuous learning and innovation, to reach new sectors like the field of Medical, Aerospace, Oil & Gas, and Automobile industries by offering products that will make changes in the present state of machine tools.
              </p>
            </motion.div>

            {/* What We Do */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pl-0 md:pl-12 border-l-0 md:border-l border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-brand-primary" />
                <h3 className="font-heading text-3xl font-medium uppercase tracking-tight text-white">What we do</h3>
              </div>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                We at Grace Engineering specialize in manufacturing complex and intricate parts. We have a flexible infrastructure where we can run small and high-volume production while achieving a high level of precision without compromising on quality at competitive pricing.
              </p>
            </motion.div>

            {/* Why We Do It */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-brand-primary" />
                <h3 className="font-heading text-3xl font-medium uppercase tracking-tight text-white">Why we do it</h3>
              </div>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-6">
                We at Grace Engineering consider our partners, employees, and contributors as our family and strive to maintain that relationship for a lifetime. We want to provide our clients with the highest level of precision and quality, adding the highest value to their supply chain.
              </p>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                Our entrenched values, ethos, and honourable business conduct will result in outstanding growth and a respected reputation in the industry.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
