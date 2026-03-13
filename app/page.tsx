import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import EngineeringFocus from "./components/EngineeringFocus";
import OpenSource from "./components/OpenSource";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#060812]">
      <Navbar />
      <Hero />
      <Projects />
      <Philosophy />
      <EngineeringFocus />
      <OpenSource />
      <Footer />
    </main>
  );
}
