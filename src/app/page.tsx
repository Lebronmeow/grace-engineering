import Hero3D from "@/components/Hero3D";
import AboutUs from "@/components/AboutUs";
import ProductShowcase from "@/components/ProductShowcase";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import CapabilitiesPreview from "@/components/CapabilitiesPreview";
import Gallery from "@/components/Gallery";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="bg-brand-dark pt-20">
      <div className="md:snap-start md:snap-always md:min-h-screen">
        <Hero3D />
      </div>
      <div className="md:snap-start md:snap-always md:min-h-screen">
        <AboutUs />
      </div>
      <div className="md:snap-start md:snap-always md:min-h-screen">
        <ProductShowcase />
      </div>
      <div className="md:snap-start md:snap-always md:min-h-screen">
        <IndustriesWeServe />
      </div>
      <div className="md:snap-start md:snap-always md:min-h-screen">
        <CapabilitiesPreview />
      </div>
      <div className="md:snap-start md:snap-always md:min-h-screen">
        <Gallery />
      </div>
      <div className="md:snap-start md:snap-always">
        <ContactCTA />
      </div>
    </main>
  );
}
