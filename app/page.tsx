import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Signal from "./components/Signal";
import Footer from "./components/Footer";
import Stack from "./components/Stack";

export default function Home() {
  return (
    <main className="mx-auto max-w-250 px-8 flex flex-col">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Signal />
      <Footer />
    </main>
  );
}
