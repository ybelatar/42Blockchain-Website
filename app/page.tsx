
import { Hero } from "@/components/sections/hero";
import { Presence } from "@/components/sections/presence";


export default function Home() {
  return (
    <section className="container mx-auto">
      <Hero />
      <Presence />
    </section>
  );
}
