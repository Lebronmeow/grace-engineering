"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function AboutUs() {
  return (
    <section id="about" className="py-32 md:py-40 bg-black relative flex items-center min-h-screen">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-brand-primary/30 transition-colors duration-500 h-full shadow-2xl shadow-black/50"
            >
              <div style={{ transform: "translateZ(30px)" }}>
                <Users className="w-8 h-8 text-brand-primary mb-2" />
                <h3 className="font-heading text-3xl font-medium uppercase tracking-tight text-white mb-4">Who we are</h3>
              </div>
              <p className="text-white/60 text-base md:text-lg leading-relaxed" style={{ transform: "translateZ(20px)" }}>
                Founded in 2014, Grace Engineering has evolved into Mumbai's premier advanced machining facility. Driven by a relentless pursuit of innovation, we engineer paradigm-shifting components for the world's most demanding sectors—including Aerospace, Medical, Automotive, and Oil & Gas.
              </p>
            </Tilt>
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-brand-primary/30 transition-colors duration-500 h-full shadow-2xl shadow-black/50"
            >
              <div style={{ transform: "translateZ(30px)" }}>
                <Target className="w-8 h-8 text-brand-primary mb-2" />
                <h3 className="font-heading text-3xl font-medium uppercase tracking-tight text-white mb-4">What we do</h3>
              </div>
              <p className="text-white/60 text-base md:text-lg leading-relaxed" style={{ transform: "translateZ(20px)" }}>
                We master the geometry of complex components. Our state-of-the-art infrastructure is calibrated for both agile prototyping and high-volume manufacturing, ensuring uncompromised precision, rigorous tolerances, and unmatched structural integrity at competitive scale.
              </p>
            </Tilt>
          </motion.div>

          {/* Why We Do It */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-brand-primary/30 transition-colors duration-500 h-full shadow-2xl shadow-black/50"
            >
              <div style={{ transform: "translateZ(30px)" }}>
                <Award className="w-8 h-8 text-brand-primary mb-2" />
                <h3 className="font-heading text-3xl font-medium uppercase tracking-tight text-white mb-4">Why we do it</h3>
              </div>
              <p className="text-white/60 text-base md:text-lg leading-relaxed" style={{ transform: "translateZ(20px)" }}>
                Engineering is more than a process; it is a partnership. We operate on a foundation of uncompromising ethics, treating every client and employee as family. Our mission is to forge lifelong alliances that elevate the capability and resilience of your supply chain.
              </p>
            </Tilt>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
