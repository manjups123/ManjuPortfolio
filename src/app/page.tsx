import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import BusinessSolutions from "@/components/sections/BusinessSolutions";
import HireMe from "@/components/sections/HireMe";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <BusinessSolutions />
      <HireMe />
      <Contact />
    </div>
  );
}
