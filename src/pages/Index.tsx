import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Collection from "@/components/Collection";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-vestex-950 antialiased">
      <Header />
      <Hero />
      <Manifesto />
      <Collection />
      <Philosophy />
      <Contact />
    </main>
  );
};

export default Index;
