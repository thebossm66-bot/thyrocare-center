import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Packages />
      <WhyChooseUs />
      <Testimonials />
      <Process />
      <Contact />
      <FloatingWhatsApp />
    </>
  );
}
