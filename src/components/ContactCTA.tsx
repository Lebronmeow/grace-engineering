"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, MapPin } from "lucide-react";

export default function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // Add FormSubmit configurations
    formData.append("_subject", "New Contact Form Query - Grace Engineering");
    formData.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/ajax/sales@graceengineering.in", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData,
      });

      if (response.ok) {
        setIsSent(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try emailing us directly at sales@graceengineering.in");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-start bg-black border-t border-white/5 overflow-hidden">
      {/* Background Map */}
      <a 
        href="https://maps.app.goo.gl/YmxoyhrvhPU4Yndv9" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute inset-0 z-0 grayscale-[0.3] opacity-80 block hover:opacity-90 transition-opacity"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.513511874288!2d72.846383!3d19.4078296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a92a525bdc9b%3A0x60013c6ead508ae5!2sGRACE%20ENGINEERING!5e0!3m2!1sen!2sin!4v1718029094030!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none"
        ></iframe>
        {/* Click indicator/badge */}
        <div className="absolute bottom-6 right-6 bg-black/80 text-[#F9F9F9] border border-white/20 hover:border-brand-primary/50 text-xs font-semibold px-4 py-2.5 rounded-full flex items-center gap-2 backdrop-blur-md shadow-2xl transition-all z-20 pointer-events-none">
          <MapPin className="w-3.5 h-3.5 text-brand-primary" />
          <span>Click to open in Google Maps</span>
        </div>
      </a>
      
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

          {isSent ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-10 bg-white/5 border border-white/10 rounded-xl"
            >
              <CheckCircle2 className="w-16 h-16 text-[#E8D44D] mb-4" />
              <h3 className="font-heading text-xl text-white mb-2">Message Sent!</h3>
              <p className="text-white/60 text-sm">Thank you for reaching out.<br />We will contact you shortly.</p>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  name="name"
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
                  name="email"
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
                  name="organization"
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
                  name="phone"
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
                  name="message"
                  required
                  className="block w-full bg-transparent border-0 border-b border-white/20 px-0 py-2 text-white focus:ring-0 focus:border-white transition-colors peer placeholder-transparent"
                  placeholder="Message *"
                />
                <label htmlFor="message" className="absolute left-0 top-2 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-valid:-top-4 peer-valid:text-xs flex items-center gap-1">
                  Message <span className="text-red-500">*</span>
                </label>
              </div>

              <input type="text" name="_honey" style={{ display: "none" }} />

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-12 bg-white text-black font-semibold text-sm tracking-wide py-4 px-8 w-full md:w-auto hover:bg-brand-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
