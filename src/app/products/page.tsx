"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      title: "SS Sleeve Nuts",
      description: "High-grade stainless steel sleeve nuts for robust structural connections.",
    },
    {
      title: "Fasteners",
      description: "Comprehensive range of industrial-grade fasteners for secure assemblies.",
    },
    {
      title: "Hex Bolts",
      description: "Heavy-duty hex bolts manufactured to precise tolerances.",
    },
    {
      title: "Steel Pipe Fittings",
      description: "Durable pipe fittings ensuring leak-proof fluid and gas transfer.",
    },
    {
      title: "Valve Gear Shafts",
      description: "Precision-engineered shafts for critical valve operations.",
    },
    {
      title: "Rivets & Shackles",
      description: "High-strength rivets and shackles for heavy lifting and fastening.",
    },
    {
      title: "CNC Components",
      description: "Custom CNC turned and milled components tailored to your specs.",
    },
  ];

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
            Our <span className="text-brand-primary">Products</span>
          </h1>
          <p className="text-brand-light/60 text-lg max-w-2xl">
            Explore our comprehensive range of high-quality industrial components, manufactured with precision and built to last.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-brand-card border border-white/5 flex flex-col hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,119,182,0.15)] transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 via-gray-900 to-black relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-50" />
                <span className="text-brand-light/20 font-heading uppercase tracking-widest text-sm relative z-10 group-hover:scale-110 transition-transform duration-500 text-center px-4">
                  {product.title} Image
                </span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-brand-card relative z-20">
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-brand-primary transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-brand-light/60 text-sm mb-6 flex-grow">
                  {product.description}
                </p>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary-light font-medium transition-colors text-sm mt-auto w-fit"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
