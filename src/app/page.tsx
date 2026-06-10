import Hero3D from "@/components/Hero3D";
import ProductShowcase from "@/components/ProductShowcase";
import CapabilitiesPreview from "@/components/CapabilitiesPreview";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="bg-brand-dark pt-20">
      <Hero3D />
      <ProductShowcase />
      <CapabilitiesPreview />
      <ContactCTA />
    </main>
  );
}
