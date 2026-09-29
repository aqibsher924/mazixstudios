import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { TechMarquee } from "@/components/home/tech-marquee";
import { IntroPillars } from "@/components/home/intro-pillars";
import { Challenge } from "@/components/home/challenge";
import { Capabilities } from "@/components/home/capabilities";
import { Process } from "@/components/home/process";
import { Domains } from "@/components/home/domains";
import { Metrics } from "@/components/home/metrics";
import { StackGrid } from "@/components/home/stack-grid";
import { Showcase } from "@/components/home/showcase";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <TechMarquee />
        <IntroPillars />
        <Challenge />
        <Capabilities />
        <Process />
        <Domains />
        <Metrics />
        <StackGrid />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
