import { motion } from "framer-motion";

export function LocationMap({ location, coordinates, className = "" }: { location: string, coordinates: string, className?: string }) {
  return (
    <a 
      href="https://maps.app.goo.gl/YmxoyhrvhPU4Yndv9" 
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden bg-brand-dark cursor-pointer shadow-2xl transition-all duration-700 hover:shadow-brand-primary/20 ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-muted/10" />
        <iframe 
          src="https://maps.google.com/maps?q=Grace%20Engineering,%20Unit%20109,%20Bldg%205,%20Patel%20Indl.%20Estate,%20Vasai%20(East),%20Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none"
        ></iframe>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end pointer-events-none">
        <div>
          <h4 className="font-heading text-xl font-bold tracking-tight text-white mb-1 drop-shadow-md">
            {location}
          </h4>
          <p className="text-brand-primary font-mono text-xs opacity-80 uppercase tracking-widest drop-shadow-md">
            {coordinates}
          </p>
        </div>
        
        <div className="w-10 h-10 rounded-full bg-brand-primary/10 backdrop-blur-md border border-brand-primary/30 flex items-center justify-center text-brand-primary opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_15px_rgba(232,212,77,0.3)]">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </a>
  );
}
