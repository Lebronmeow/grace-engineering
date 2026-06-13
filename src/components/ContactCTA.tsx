"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { LocationMap } from "@/components/ui/expand-map";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-12 lg:py-20 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white mb-4 leading-none">
              Initiate<br />
              <span className="text-white/40">Contact</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-12"
          >
            <div className="space-y-8">
              <div className="group relative pl-8 border-l border-white/10 hover:border-brand-primary/50 transition-colors duration-500">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-2 h-2 bg-black border border-white/20 group-hover:border-brand-primary group-hover:bg-brand-primary/20 transition-all duration-500" />
                <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-white/40 mb-3 flex items-center gap-3">
                  <MapPin className="w-4 h-4" /> Address
                </h4>
                <p className="text-white/70 text-lg font-light tracking-wide leading-relaxed uppercase">
                  Unit 109, Bldg 5, Patel Indl. Estate,<br />
                  Gauraipada Road, Behind Range Office,<br />
                  Vasai (East), Dist. Palghar,<br />
                  Maharashtra, India - 401208.
                </p>
              </div>
              
              <div className="group relative pl-8 border-l border-white/10 hover:border-brand-primary/50 transition-colors duration-500">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-2 h-2 bg-black border border-white/20 group-hover:border-brand-primary group-hover:bg-brand-primary/20 transition-all duration-500" />
                <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-white/40 mb-3 flex items-center gap-3">
                  <Phone className="w-4 h-4" /> Direct Line
                </h4>
                <p className="text-white/70 text-lg font-light tracking-wide">
                  9370497270
                </p>
              </div>
              
              <div className="group relative pl-8 border-l border-white/10 hover:border-brand-primary/50 transition-colors duration-500">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-2 h-2 bg-black border border-white/20 group-hover:border-brand-primary group-hover:bg-brand-primary/20 transition-all duration-500" />
                <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-white/40 mb-3 flex items-center gap-3">
                  <Mail className="w-4 h-4" /> Electronic Mail
                </h4>
                <p className="text-white/70 text-lg font-light tracking-wide">
                  graceengineerings@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Form & Map Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-primary transition-colors" />
                <input type="email" placeholder="Your Email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-primary transition-colors" />
              </div>
              <input type="tel" placeholder="Phone Number" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-primary transition-colors" />
              <textarea placeholder="Your Message" rows={4} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-primary transition-colors resize-none"></textarea>
              <button type="submit" className="bg-brand-primary text-black font-semibold tracking-wide uppercase py-3 px-6 rounded-xl hover:bg-brand-accent transition-colors w-full flex items-center justify-center gap-2">
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            
            <LocationMap location="Vasai East, Maharashtra" coordinates="19.4078° N, 72.8489° E" className="w-full h-[200px] lg:h-[240px] rounded-2xl border border-white/5 bg-brand-card/50" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
