import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Sherpa from "@/components/Sherpa";
import Basecamps from "@/components/Basecamps";
import Routing from "@/components/Routing";
import Outcomes from "@/components/Outcomes";
import Founder from "@/components/Founder";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <Sherpa />
      <Basecamps />
      <Routing />
      <Outcomes />
      <Founder />
      <CtaBand />
      <Footer />
    </>
  );
}
