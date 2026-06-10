"use client";

import { motion } from "framer-motion";
import { Award, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-brand-primary">Grace Engineering</span>
          </h1>
          <p className="text-brand-light/60 text-lg max-w-3xl">
            A legacy of precision, reliability, and excellence in manufacturing since our inception.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-brand-light/80"
          >
            <h2 className="font-heading text-3xl font-semibold text-white">Our History & Mission</h2>
            <p className="leading-relaxed">
              Located in the industrial hub of Vasai, Maharashtra, Grace Engineering has grown into a trusted name for precision machining and manufacturing. Our commitment to quality has allowed us to serve diverse industries including automotive, construction, and oil & gas.
            </p>
            <p className="leading-relaxed">
              Our mission is to deliver high-quality, perfectly engineered components that meet the exact specifications of our clients, on time, every time. We believe in continuous improvement and investing in cutting-edge machinery to stay ahead in the manufacturing sector.
            </p>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white">ISO 9001:2015</h3>
                  <p className="text-sm text-brand-light/60 mt-1">Certified Quality Management</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-accent/10 rounded-lg text-brand-accent shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white">Precision Focus</h3>
                  <p className="text-sm text-brand-light/60 mt-1">Zero tolerance for errors</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-brand-card border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-50" />
              <span className="text-brand-light/20 font-heading uppercase tracking-widest text-sm relative z-10">
                Facility / Team Image
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
