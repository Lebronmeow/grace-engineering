"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-start bg-black border-t border-white/5 overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0 z-0 grayscale-[0.3] opacity-80">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.513511874288!2d72.846383!3d19.4078296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a92a525bdc9b%3A0x60013c6ead508ae5!2sGRACE%20ENGINEERING!5e0!3m2!1sen!2sin!4v1718029094030!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-auto"
        ></iframe>
      </div>
      
      {/* Optional subtle gradient overlay to ensure text readability on edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full flex justify-start py-20">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#1A1A1A] p-10 lg:p-14 w-full max-w-md shadow-2xl relative"
        >
          <h2 className="font-heading text-4xl mb-4 text-white">Get In Touch</h2>
          <p className="text-white/60 mb-10 text-sm leading-relaxed">
            Drop us your query and we will<br />get back to you as soon as we can.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input 
                type="text" 
                id="name"
                required 
                className="block w-full bg-transparent border-0 border-b border-white/20 px-0 py-2 text-white focus:ring-0 focus:border-white transition-colors peer placeholder-transparent"
                placeholder="Name *"
              />
              <label htmlFor="name" className="absolute left-0 top-2 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-valid:-top-4 peer-valid:text-xs flex items-center gap-1">
                Name <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="relative mt-8">
              <input 
                type="email" 
                id="email"
                required 
                className="block w-full bg-transparent border-0 border-b border-white/20 px-0 py-2 text-white focus:ring-0 focus:border-white transition-colors peer placeholder-transparent"
                placeholder="E-Mail *"
              />
              <label htmlFor="email" className="absolute left-0 top-2 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-valid:-top-4 peer-valid:text-xs flex items-center gap-1">
                E-Mail <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="relative mt-8">
              <input 
                type="text" 
                id="org"
                className="block w-full bg-transparent border-0 border-b border-white/20 px-0 py-2 text-white focus:ring-0 focus:border-white transition-colors peer placeholder-transparent"
                placeholder="Organization/Company"
              />
              <label htmlFor="org" className="absolute left-0 top-2 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">
                Organization/Company
              </label>
            </div>

            <div className="relative mt-8">
              <input 
                type="tel" 
                id="phone"
                className="block w-full bg-transparent border-0 border-b border-white/20 px-0 py-2 text-white focus:ring-0 focus:border-white transition-colors peer placeholder-transparent"
                placeholder="Phone Number"
              />
              <label htmlFor="phone" className="absolute left-0 top-2 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">
                Phone Number
              </label>
            </div>

            <div className="relative mt-8">
              <input 
                type="text" 
                id="message"
                required
                className="block w-full bg-transparent border-0 border-b border-white/20 px-0 py-2 text-white focus:ring-0 focus:border-white transition-colors peer placeholder-transparent"
                placeholder="Message *"
              />
              <label htmlFor="message" className="absolute left-0 top-2 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-valid:-top-4 peer-valid:text-xs flex items-center gap-1">
                Message <span className="text-red-500">*</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="mt-12 bg-white text-black font-semibold text-sm tracking-wide py-4 px-8 w-full md:w-auto hover:bg-brand-accent transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
