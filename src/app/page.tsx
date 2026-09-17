import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
