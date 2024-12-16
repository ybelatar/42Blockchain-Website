"use client";

import { Hero } from "@/components/sections/hero";
import { Presence } from "@/components/sections/presence";
import { Partnership } from "@/components/sections/partnership";


export default function Home() {
  return (
    <section className="container mx-auto">
      <Hero />
      <Presence />
      <Partnership />
    </section>
  );
}
