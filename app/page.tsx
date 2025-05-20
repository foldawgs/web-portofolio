//* eslint-disable @next/next/no-img-element */
"use client";

import AboutMeBento from "@/components/AboutMeBento";
import Hero from "@/components/Hero";
import ProjectCards from "@/components/ProjectCards";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/navItems";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 h-full">
      <div className="max-w-7xl w-full h-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <section id="about" className="pt-30 mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            About Me
          </h2>
        </section>
        <AboutMeBento />
        <section id="projects" className="pt-30 mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            My Project
          </h2>
        </section>
        <ProjectCards />

      </div>
    </main>
  );
}
