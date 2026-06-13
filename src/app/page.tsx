import Hero3D from "@/components/Hero3D";
import AboutUs from "@/components/AboutUs";
import CoreServices from "@/components/CoreServices";
import IndustriesWeServe from "@/components/IndustriesWeServe";
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
        <CoreServices />
      </div>
      <div className="md:snap-start md:snap-always md:min-h-screen">
        <IndustriesWeServe />
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
