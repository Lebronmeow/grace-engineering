import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="md:snap-start bg-brand-card border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <Link href="/" className="font-heading font-bold text-2xl tracking-wider text-brand-light flex items-center gap-3 mb-4">
            <Image src="/grace_logo.png" alt="Grace Engineering Logo" width={32} height={32} className="object-contain" />
            GRACE ENGINEERING
          </Link>
          <p className="text-brand-light/60 text-sm leading-relaxed mb-6 max-w-sm">
            Precision Services Through Innovative Manufacturing. ISO 9001:2015 certified manufacturer delivering quality and reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4 text-brand-light">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Industries", href: "#industries" },
              { name: "Gallery", href: "#gallery" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-brand-light/60 hover:text-brand-accent transition-colors text-sm">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4 text-brand-light">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-brand-light/60">
              <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
              <a 
                href="https://maps.app.goo.gl/YmxoyhrvhPU4Yndv9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors"
              >
                Unit 109, Bldg 5, Patel Indl. Estate, Gauraipada Road, Behind Range Office, Vasai (East), PIN: 401208.
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-brand-light/60">
              <Phone className="w-5 h-5 text-brand-primary shrink-0" />
              <a href="tel:+919370497270" className="hover:text-brand-primary transition-colors">
                +91 9370497270
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-brand-light/60">
              <Mail className="w-5 h-5 text-brand-primary shrink-0" />
              <a href="mailto:graceengineerings@gmail.com" className="hover:text-brand-primary transition-colors">
                graceengineerings@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-brand-light/40 text-xs">
          © {new Date().getFullYear()} Grace Engineering. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-brand-light/40 hover:text-brand-light text-xs transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-brand-light/40 hover:text-brand-light text-xs transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
