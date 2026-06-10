"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
import { X } from "lucide-react"

interface LocationMapProps {
  location?: string
  coordinates?: string
  className?: string
}

export function LocationMap({
  location = "San Francisco, CA",
  coordinates = "37.7749° N, 122.4194° W",
  className,
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [2, -2])
  const rotateY = useTransform(mouseX, [-50, 50], [-2, 2])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const handleClick = () => {
    window.open("https://maps.app.goo.gl/YmxoyhrvhPU4Yndv9", "_blank");
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative cursor-pointer select-none ${className}`}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden rounded-2xl bg-background border border-border"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-transparent to-muted/40" />

        {/* Map Thumbnail Design */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-muted/10" />

          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            {/* Main roads */}
            <line x1="0%" y1="35%" x2="100%" y2="35%" className="stroke-foreground/25" strokeWidth="4" />
            <line x1="0%" y1="65%" x2="100%" y2="65%" className="stroke-foreground/25" strokeWidth="4" />
            {/* Vertical main roads */}
            <line x1="30%" y1="0%" x2="30%" y2="100%" className="stroke-foreground/20" strokeWidth="3" />
            <line x1="70%" y1="0%" x2="70%" y2="100%" className="stroke-foreground/20" strokeWidth="3" />
            {/* Secondary streets */}
            {[20, 50, 80].map((y, i) => (
              <line key={`h-${i}`} x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`} className="stroke-foreground/10" strokeWidth="1.5" />
            ))}
            {[15, 45, 55, 85].map((x, i) => (
              <line key={`v-${i}`} x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%" className="stroke-foreground/10" strokeWidth="1.5" />
            ))}
          </svg>

          {/* Buildings */}
          <div className="absolute top-[40%] left-[10%] w-[15%] h-[20%] rounded-sm bg-muted-foreground/30 border border-muted-foreground/20" />
          <div className="absolute top-[15%] left-[35%] w-[12%] h-[15%] rounded-sm bg-muted-foreground/25 border border-muted-foreground/15" />
          <div className="absolute top-[70%] left-[75%] w-[18%] h-[18%] rounded-sm bg-muted-foreground/28 border border-muted-foreground/18" />
          <div className="absolute top-[20%] right-[10%] w-[10%] h-[25%] rounded-sm bg-muted-foreground/22 border border-muted-foreground/15" />
          <div className="absolute top-[55%] left-[5%] w-[8%] h-[12%] rounded-sm bg-muted-foreground/20 border border-muted-foreground/12" />
          <div className="absolute top-[8%] left-[75%] w-[14%] h-[10%] rounded-sm bg-muted-foreground/22 border border-muted-foreground/15" />

          {/* Center Map Marker Pin */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ y: isHovered ? -25 : -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-lg"
              style={{ filter: "drop-shadow(0 0 10px rgba(52, 211, 153, 0.5))" }}
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#34D399" />
              <circle cx="12" cy="9" r="2.5" className="fill-background" />
            </svg>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </div>
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{ opacity: 0.03 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-foreground" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-5">
          {/* Top section */}
          <div className="flex items-start justify-between">
            <div className="relative">
              <motion.div
                className="relative"
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Map Icon SVG */}
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-400"
                  animate={{
                    filter: isHovered
                      ? "drop-shadow(0 0 8px rgba(52, 211, 153, 0.6))"
                      : "drop-shadow(0 0 4px rgba(52, 211, 153, 0.3))",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                  <line x1="9" x2="9" y1="3" y2="18" />
                  <line x1="15" x2="15" y1="6" y2="21" />
                </motion.svg>
              </motion.div>
            </div>

            {/* Status indicator */}
            <motion.div
              className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-foreground/5 backdrop-blur-sm"
              animate={{
                scale: isHovered ? 1.05 : 1,
                backgroundColor: isHovered ? "hsl(var(--foreground) / 0.08)" : "hsl(var(--foreground) / 0.05)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-medium text-muted-foreground tracking-wide uppercase">Live</span>
            </motion.div>
          </div>

          {/* Bottom section */}
          <div className="space-y-1">
            <motion.h3
              className="text-foreground font-medium text-sm tracking-tight"
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {location}
            </motion.h3>

            <AnimatePresence>
                <motion.p
                  className="text-muted-foreground text-xs font-mono"
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  transition={{ duration: 0.25 }}
                >
                  {coordinates}
                </motion.p>
            </AnimatePresence>

            {/* Animated underline */}
            <motion.div
              className="h-px bg-gradient-to-r from-emerald-500/50 via-emerald-400/30 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{
                scaleX: isHovered ? 1 : 0.3,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

      </motion.div>

      {/* Click hint */}
      <motion.p
        className="absolute -bottom-6 left-1/2 text-[10px] text-muted-foreground whitespace-nowrap"
        style={{ x: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 4,
        }}
        transition={{ duration: 0.2 }}
      >
        Click to open Google Maps
      </motion.p>
    </motion.div>
  )
}
