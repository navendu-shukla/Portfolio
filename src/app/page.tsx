import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Upcoming from "@/components/Upcoming";
import Highlights from "@/components/Highlights";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Upcoming />
        <Highlights />
        <Experience />
        <Skills />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
