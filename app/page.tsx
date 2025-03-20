"use client";

import Hero from "@/components/organism/Home/Hero";
import Latest from "@/components/organism/Home/Latest";
import Publications from "@/components/organism/Home/Publications";
import KeyResults from "@/components/organism/Home/KeyResults";

export default function Home() {
  return (
    <main>
      <Hero />
      <Latest />
      <KeyResults />
      <Publications />
    </main>
  );
}
