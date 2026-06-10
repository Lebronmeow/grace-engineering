"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { LocationMap } from "@/components/ui/expand-map";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-brand-primary">Touch</span>
          </h1>
          <p className="text-brand-light/60 text-lg max-w-2xl mx-auto">
            Whether you need a custom quote, technical consultation, or more information about our capabilities, our team is ready to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-brand-card p-8 rounded-3xl border border-white/5 space-y-8">
              <h3 className="font-heading text-2xl font-semibold">Contact Information</h3>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg mb-2 text-white">Address</h4>
                  <p className="text-brand-light/60 leading-relaxed">
                    Unit 109, Bldg 5, Patel Indl. Estate,<br />
                    Gauraipada Road, Behind Range Office,<br />
                    Vasai (East), PIN: 401208.<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg mb-2 text-white">Phone</h4>
                  <p className="text-brand-light/60">9370497270</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg mb-2 text-white">Email</h4>
                  <p className="text-brand-light/60">graceengineerings@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg mb-2 text-white">Business Hours</h4>
                  <p className="text-brand-light/60">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-brand-light/60">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-brand-card p-8 rounded-3xl border border-white/5">
              <h3 className="font-heading text-2xl font-semibold mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-light/80 mb-2">First Name</label>
                    <input type="text" className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-light/80 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-light/80 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-light/80 mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"></textarea>
                </div>
                <button className="w-full bg-brand-primary text-black font-semibold py-4 rounded-xl hover:bg-brand-accent transition-colors flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>

            <LocationMap location="Vasai East, Maharashtra" coordinates="19.4078° N, 72.8489° E" className="w-full h-[240px] rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
