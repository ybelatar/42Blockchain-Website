"use client";

import { Hero } from "@/components/sections/hero";
import { Presence } from "@/components/sections/presence";
import { Partnership } from "@/components/sections/partnership";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <section className="container mx-auto">
      <Hero />
      <Presence />
      <Partnership />
      <Contact />
    </section>
  );
}
