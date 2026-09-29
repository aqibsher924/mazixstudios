import { Hero } from "@/components/home/hero";
import { MarketSystems } from "@/components/home/market-systems";
import { Services } from "@/components/home/services";
import { Industries } from "@/components/home/industries";
import { Capabilities } from "@/components/home/capabilities";
import { Process } from "@/components/home/process";
import { Metrics } from "@/components/home/metrics";
import { StackGrid } from "@/components/home/stack-grid";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <main>
        <Hero />
        <MarketSystems />
        <Services />
        <Industries />
        <Capabilities />
        <Process />
        <Metrics />
        <StackGrid />
        <Contact />
    </main>
  );
}
