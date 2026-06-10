"use client";

import { motion } from "framer-motion";
import { Settings, Ruler, Wrench, ShieldCheck } from "lucide-react";

export default function CapabilitiesPage() {
  const capabilities = [
    {
      id: "cnc-turning",
      title: "CNC Turning",
      icon: Settings,
      description: "Our high-speed, precision CNC turning centers are capable of producing complex cylindrical components with extremely tight tolerances. We handle a variety of materials including stainless steel, mild steel, brass, and aluminum.",
      features: ["Multi-axis turning", "Bar feeding for high volume", "Complex geometries", "Tolerance up to ±0.01mm"]
    },
    {
      id: "precision-machining",
      title: "Precision Machining",
      icon: Ruler,
      description: "Equipped with advanced vertical machining centers (VMCs), we perform intricate milling, drilling, and tapping operations. Our team ensures that every component meets rigorous geometric dimensioning and tolerancing (GD&T) requirements.",
      features: ["3-axis & 4-axis milling", "Jigs & fixtures manufacturing", "Surface grinding", "Thread milling"]
    },
    {
      id: "custom-manufacturing",
      title: "Custom Manufacturing",
      icon: Wrench,
      description: "We partner with clients to develop custom-engineered solutions. From prototyping to full-scale production, our engineering team works closely with you to optimize designs for manufacturability and cost-efficiency.",
      features: ["Rapid prototyping", "Reverse engineering", "Material selection consulting", "Small to large batch runs"]
    },
    {
      id: "quality-control",
      title: "Quality Control",
      icon: ShieldCheck,
      description: "Quality is embedded in every stage of our process. Our ISO 9001:2015 certified facility employs rigorous inspection protocols utilizing Coordinate Measuring Machines (CMM), optical comparators, and advanced metrology tools.",
      features: ["In-process inspection", "Final dimensional reports", "Material test certificates", "Traceability"]
    }
  ];

  return (
    <main className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-brand-primary">Capabilities</span>
          </h1>
          <p className="text-brand-light/60 text-lg max-w-3xl mx-auto">
            State-of-the-art machinery combined with decades of engineering expertise to deliver flawless industrial components.
          </p>
        </motion.div>

        <div className="space-y-24">
          {capabilities.map((cap, index) => (
            <motion.div 
              key={cap.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-card border border-white/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,119,182,0.15)_0%,transparent_70%)] opacity-50" />
                    <span className="text-brand-light/20 font-heading uppercase tracking-widest text-sm relative z-10 flex flex-col items-center gap-4">
                      <cap.icon className="w-12 h-12 text-brand-light/20" />
                      {cap.title} Image
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-brand-primary/10 text-brand-primary mb-2">
                  <cap.icon className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
                  {cap.title}
                </h2>
                <p className="text-brand-light/70 text-lg leading-relaxed">
                  {cap.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {cap.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-light/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
