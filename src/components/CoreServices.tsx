"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function TiltRow({ children, delay }: { children: React.ReactNode, delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
      className="border-t border-white/5 first:border-t-0"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-8 py-8 lg:py-10 px-8 -mx-8 rounded-3xl hover:bg-[#111] transition-colors duration-700 cursor-default shadow-2xl shadow-black/50"
      >
        <div style={{ transform: "translateZ(40px)" }} className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CoreServices() {
  const capabilities = [
    {
      num: "01",
      title: "CNC & VMC Precision Machining",
      desc: "High-precision CNC turning and VMC milling for complex components, delivering tight tolerances across small and high-volume production runs.",
    },
    {
      num: "02",
      title: "Design & Fabrication",
      desc: "End-to-end design support and metal fabrication services tailored to client specifications, from prototyping to finished parts.",
    },
    {
      num: "03",
      title: "Tools & Die Mold",
      desc: "Custom tooling, dies, and molds engineered for durability and repeatable accuracy in production processes.",
    },
    {
      num: "04",
      title: "Quality Control",
      desc: "Rigorous in-house inspection and quality checks at every stage to ensure parts meet exact specifications and industry standards.",
    },
  ];

  return (
    <section id="capabilities" className="min-h-screen py-24 lg:py-32 flex flex-col justify-center bg-black relative border-t border-white/5">
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-brand-primary/20 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky top-auto self-center"
          >
            <h2 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase text-white mb-6 leading-none">
              Core<br />
              <span className="text-white/40">Services</span>
            </h2>
            <div className="w-16 h-px bg-brand-primary/50 mb-8" />
            <p className="text-white/50 text-lg font-light tracking-wide max-w-sm">
              We specialize in manufacturing complex and intricate parts with industry-leading precision and uncompromising quality standards.
            </p>
          </motion.div>

          <div className="flex flex-col">
            {capabilities.map((cap, i) => (
              <TiltRow key={cap.num} delay={i * 0.15}>
                <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-light tracking-tighter text-white/10 group-hover:text-white/30 transition-colors duration-700 select-none">
                  {cap.num}
                </div>
                
                <div className="flex-1 sm:pl-8 sm:border-l border-white/5 group-hover:border-brand-primary/50 transition-colors duration-700">
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight mb-4 text-white uppercase group-hover:text-brand-accent transition-colors duration-500">
                    {cap.title}
                  </h3>
                  <p className="text-white/50 text-base sm:text-lg font-light tracking-wide leading-relaxed max-w-xl group-hover:text-white/80 transition-colors duration-500">
                    {cap.desc}
                  </p>
                </div>

                <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden lg:block">
                  <div className="w-2 h-2 rounded-none bg-brand-accent/80 shadow-[0_0_15px_rgba(232,212,77,0.8)]" />
                </div>
              </TiltRow>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
