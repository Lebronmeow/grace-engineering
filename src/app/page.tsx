import Hero3D from "@/components/Hero3D";
import AboutUs from "@/components/AboutUs";
import CoreServices from "@/components/CoreServices";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Gallery from "@/components/Gallery";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="bg-brand-dark pt-20">
      <Hero3D />
      <AboutUs />
      <CoreServices />
      <IndustriesWeServe />
      <Gallery />
      <ContactCTA />
    </main>
  );
}
