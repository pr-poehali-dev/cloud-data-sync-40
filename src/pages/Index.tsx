import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Landscape from "@/components/Landscape";
import Collection from "@/components/Collection";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import { useLenis } from "@/hooks/useLenis";

const Index = () => {
  useLenis();

  return (
    <main className="min-h-screen bg-vestex-950 antialiased">
      <Header />
      <Hero />
      <Manifesto />
      <Landscape />
      <Collection />
      <Philosophy />
      <Contact />
    </main>
  );
};

export default Index;