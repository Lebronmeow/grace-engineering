"use client";

import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Center } from '@react-three/drei';

// Extrude settings for massive 3D embossing!
// The base gear is thick. The white/yellow parts sit fully ON TOP and have their own huge depth,
// creating beautiful deep shadows exactly like the 3D render you provided.
const baseExtrude = { depth: 0.40, bevelEnabled: true, bevelSegments: 4, bevelSize: 0.03, bevelThickness: 0.03, curveSegments: 128 };
const whiteExtrude = { depth: 0.15, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.015, bevelThickness: 0.015, curveSegments: 128 };
const yellowExtrude = { depth: 0.20, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.02, bevelThickness: 0.02, curveSegments: 128 };

// --- 1. Base Solid Blue Gear ---
function GearBase({ color = "#1E81B0", ...props }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  const gearShape = useMemo(() => {
    const teeth = 12;
    const outerRadius = 2.6;
    const innerRadius = 2.15; // Root of the teeth
    const step = (Math.PI * 2) / teeth;

    const shape = new THREE.Shape();
    for (let i = 0; i < teeth; i++) {
      const a1 = i * step;
      const a2 = a1 + step * 0.15;
      const a3 = a1 + step * 0.45;
      const a4 = a1 + step * 0.6;
      if (i === 0) shape.moveTo(Math.cos(a1) * innerRadius, Math.sin(a1) * innerRadius);
      else shape.lineTo(Math.cos(a1) * innerRadius, Math.sin(a1) * innerRadius);
      shape.lineTo(Math.cos(a2) * outerRadius, Math.sin(a2) * outerRadius);
      shape.lineTo(Math.cos(a3) * outerRadius, Math.sin(a3) * outerRadius);
      shape.lineTo(Math.cos(a4) * innerRadius, Math.sin(a4) * innerRadius);
    }
    // Shape is closed automatically. No holes!
    return shape;
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.z -= delta * 0.4;
  });

  return (
    <mesh ref={meshRef} {...props} castShadow receiveShadow>
      <extrudeGeometry args={[gearShape, baseExtrude]} />
      {/* Slightly more metallic blue to match the render */}
      <meshStandardMaterial color={color} metalness={0.4} roughness={0.3} envMapIntensity={3} emissive={color} emissiveIntensity={0.1} />
    </mesh>
  );
}

// --- 2. Thick White Arc (The Curve of the "G") ---
function ThickWhiteArc({ color = "#ffffff", ...props }: any) {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const R_OUT = 1.9;
    const R_IN = 1.4;
    
    // Starts at top right (moved slightly closer to the yellow dashes)
    const ANGLE_START = 0.32 * Math.PI; 
    
    // We want the bottom-right cut to sit perfectly flush with the TOP edge of the yellow needle.
    // The needle is at Y=0 with height 0.1, so its top edge is Y=0.05.
    const CUT_Y = 0.05; 
    const angleBotOut = Math.asin(CUT_Y / R_OUT);
    const angleBotIn = Math.asin(CUT_Y / R_IN);

    s.moveTo(Math.cos(ANGLE_START) * R_OUT, Math.sin(ANGLE_START) * R_OUT);
    
    // Outer curve CCW all the way around to the top of the needle
    s.absarc(0, 0, R_OUT, ANGLE_START, angleBotOut, false);
    
    // Straight horizontal cut inwards, perfectly flush with the needle's top edge
    s.lineTo(Math.cos(angleBotIn) * R_IN, CUT_Y); 
    
    // Inner curve CW back to the start
    s.absarc(0, 0, R_IN, angleBotIn, ANGLE_START, true);
    
    // Close the shape
    s.lineTo(Math.cos(ANGLE_START) * R_OUT, Math.sin(ANGLE_START) * R_OUT);
    return s;
  }, []);

  return (
    <mesh {...props} castShadow receiveShadow>
      <extrudeGeometry args={[shape, whiteExtrude]} />
      <meshStandardMaterial color={color} metalness={0.1} roughness={0.2} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
}

// --- 3. Thin White Arc (The Inner decorative curve) ---
function ThinWhiteArc({ color = "#ffffff", ...props }: any) {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const R_OUT = 1.15;
    const R_IN = 1.0;
    
    // Starts perfectly aligned with thick arc
    const ANGLE_START = 0.32 * Math.PI; 
    
    // Perfectly symmetrical to the top to form a true "C" shape!
    const ANGLE_END = 2 * Math.PI - ANGLE_START; // ~1.68 * Math.PI

    s.moveTo(Math.cos(ANGLE_START) * R_OUT, Math.sin(ANGLE_START) * R_OUT);

    // Outer curve CCW
    s.absarc(0, 0, R_OUT, ANGLE_START, ANGLE_END, false);
    
    // Flat radial cut
    s.lineTo(Math.cos(ANGLE_END) * R_IN, Math.sin(ANGLE_END) * R_IN);
    
    // Inner curve CW
    s.absarc(0, 0, R_IN, ANGLE_END, ANGLE_START, true);
    
    // Close the shape
    s.lineTo(Math.cos(ANGLE_START) * R_OUT, Math.sin(ANGLE_START) * R_OUT);
    return s;
  }, []);

  return (
    <mesh {...props} castShadow receiveShadow>
      <extrudeGeometry args={[shape, whiteExtrude]} />
      <meshStandardMaterial color={color} metalness={0.1} roughness={0.2} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
}

import { useState, useEffect } from 'react';

// --- 4. Yellow Gauge (The Crossbar of the "G") ---
function YellowGauge({ color = "#F4D03F", spinTrigger = 0, ...props }: any) {
  const dialRef = useRef<THREE.Group>(null);
  const targetRotation = useRef(0);
  const currentRotation = useRef(0);

  useEffect(() => {
    if (spinTrigger > 0) {
      targetRotation.current -= Math.PI * 2;
    }
  }, [spinTrigger]);

  useFrame((_, delta) => {
    if (dialRef.current) {
      // Smoothly animate the rotation using dampening
      currentRotation.current = THREE.MathUtils.damp(currentRotation.current, targetRotation.current, 5, delta);
      dialRef.current.rotation.z = currentRotation.current;
    }
  });

  const dotShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.absarc(0, 0, 0.3, 0, Math.PI * 2, false);
    return shape;
  }, []);

  const material = <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} metalness={0.6} roughness={0.2} />;
  
  // 3 Dashes perfectly filling the gap in the top right
  const dashAngles = [Math.PI * 0.08, Math.PI * 0.17, Math.PI * 0.26];
  const dashRadius = 1.65;

  return (
    <group {...props}>
      {/* 3 Static Dashes (These don't spin) */}
      {dashAngles.map((angle, i) => (
        <mesh 
          key={i} 
          position={[Math.cos(angle) * dashRadius, Math.sin(angle) * dashRadius, 0.1]} 
          rotation={[0, 0, angle]}
          castShadow 
          receiveShadow
        >
          <boxGeometry args={[0.4, 0.1, 0.2]} />
          {material}
        </mesh>
      ))}

      {/* Interactive Rotating Dial Assembly */}
      <group ref={dialRef}>
        {/* Center dot */}
        <mesh castShadow receiveShadow>
          <extrudeGeometry args={[dotShape, yellowExtrude]} />
          {material}
        </mesh>
        
        {/* Horizontal Needle reaching perfectly from the dot to the ThickWhiteArc! */}
        <mesh position={[0.825, 0, 0.1]} castShadow receiveShadow>
          <boxGeometry args={[1.15, 0.1, 0.2]} />
          {material}
        </mesh>
      </group>
    </group>
  );
}

export default function Gear3D(props: any) {
  const [spinTrigger, setSpinTrigger] = useState(0);
  const [hovered, setHover] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => { document.body.style.cursor = 'auto'; };
  }, [hovered]);

  const handleClick = (e: any) => {
    e.stopPropagation();
    setSpinTrigger(prev => prev + 1);
  };

  return (
    <group 
      {...props}
      onClick={handleClick}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true); }}
      onPointerOut={(e) => { e.stopPropagation(); setHover(false); }}
    >
      <Center>
        <group>
          {/* Base Solid Blue Gear (Spins) */}
          <GearBase position={[0, 0, -0.2]} />

          {/* Raised Static Details placed completely ON TOP of the blue gear! */}
          {/* This gives them all massive 3D depth and casts beautiful shadows onto the gear */}
          <group position={[0, 0, 0.2]}>
            <ThickWhiteArc position={[0, 0, 0]} />
            <ThinWhiteArc position={[0, 0, 0]} />
            <YellowGauge spinTrigger={spinTrigger} position={[0, 0, 0]} />
          </group>
        </group>
      </Center>
    </group>
  );
}
