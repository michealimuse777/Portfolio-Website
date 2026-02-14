
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import CurrentFocus from "@/components/CurrentFocus";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <TechStack />
      <CurrentFocus />
      <Footer />
    </main>
  );
}
