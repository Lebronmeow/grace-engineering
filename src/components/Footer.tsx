import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="md:snap-start bg-brand-card border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <Link href="/" className="font-heading font-bold text-2xl tracking-wider text-brand-light block mb-4">
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
            {["Home", "About Us", "Services Showcase", "Capabilities", "Contact"].map((item) => (
              <li key={item}>
                <Link href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`} className="text-brand-light/60 hover:text-brand-accent transition-colors text-sm">
                  {item}
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
              <span>Unit 109, Bldg 5, Patel Indl. Estate, Gauraipada Road, Behind Range Office, Vasai (East), PIN: 401208.</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-brand-light/60">
              <Phone className="w-5 h-5 text-brand-primary shrink-0" />
              <span>9370497270</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-brand-light/60">
              <Mail className="w-5 h-5 text-brand-primary shrink-0" />
              <span>graceengineerings@gmail.com</span>
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
