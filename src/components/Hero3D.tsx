"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PresentationControls, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import Gear3D from "./Gear3D";



// Native 3D entrance animation for silky smooth performance
function Entrance3D({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Start with it pushed far back, right, and rotated
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(10, 0, -10);
      groupRef.current.rotation.set(0.5, 1, 1);
      groupRef.current.scale.set(0.1, 0.1, 0.1);
    }
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smoothly animate towards default transform
      groupRef.current.position.lerp(new THREE.Vector3(0, 0, 0), delta * 1.5);
      
      const targetRotation = new THREE.Euler(0, 0, 0);
      const currentRotation = new THREE.Quaternion().setFromEuler(groupRef.current.rotation);
      const targetQuaternion = new THREE.Quaternion().setFromEuler(targetRotation);
      currentRotation.slerp(targetQuaternion, delta * 1.5);
      groupRef.current.rotation.setFromQuaternion(currentRotation);
      
      groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), delta * 1.5);
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
          <Suspense fallback={null}>
            {/* Studio lighting for metallic surfaces — no external HDR needed */}
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={3.5} castShadow color="#ffffff" />
            <directionalLight position={[-8, 5, -5]} intensity={1.5} color="#88ccff" />
            <pointLight position={[-5, 5, 5]} intensity={2.0} color="#0077B6" />
            <pointLight position={[5, -3, 3]} intensity={1.2} color="#E8D44D" />
            {/* Front fill light to make the logo pop! */}
            <pointLight position={[0, 0, 8]} intensity={2.5} color="#ffffff" />
            
            <PresentationControls 
              global 
              snap={true}
              polar={[-Math.PI / 4, Math.PI / 4]} 
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <Entrance3D>
                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                  <Gear3D position={[2.8, 0, 0]} scale={0.9} rotation={[0.2, -0.6, 0]} />
                </Float>
              </Entrance3D>
            </PresentationControls>

            <ContactShadows position={[0, -5, 0]} opacity={0.3} scale={20} blur={2.5} far={5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Radial Gradient overlay to blend 3D with text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none z-0"></div>

      {/* HTML Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center h-full pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#E8D44D] animate-pulse"></span>
            <span className="text-xs font-medium tracking-widest text-[#F9F9F9]/80 uppercase">ISO 9001:2015 CERTIFIED FIRM</span>
          </motion.div>

          <div className="flex flex-col mix-blend-normal">
            <h1 className="text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black leading-[0.85] tracking-tighter text-white whitespace-nowrap">
              GRACE
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-light leading-[0.85] tracking-tighter text-white whitespace-nowrap z-10 relative">
              ENGINEERING
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl text-white/80 font-light mt-8 mb-12 max-w-2xl border-l-2 border-[#E8D44D] pl-6 mix-blend-difference"
          >
            Delivering Elite Engineering Services and Advanced Manufacturing Solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="px-8 py-4 bg-[#0077B6] hover:bg-[#00A8E8] text-white rounded-lg font-medium transition-colors shadow-[0_0_20px_rgba(0,119,182,0.3)] hover:shadow-[0_0_30px_rgba(0,119,182,0.5)] text-center"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-[#F9F9F9] border border-white/10 rounded-lg font-medium transition-colors backdrop-blur-sm text-center"
            >
              Request Quote
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#F9F9F9]/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#F9F9F9]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
