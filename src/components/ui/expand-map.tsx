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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5359755498877!2d72.8489!3d19.4078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b08d4f%3A0x8e83361df400ec52!2sVasai%20East%2C%20Vasai-Virar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{border:0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) opacity(0.8)'}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-auto"
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
