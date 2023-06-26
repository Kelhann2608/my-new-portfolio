import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="max-w-3xl px-4 mx-auto sm:px-6 md:max-w-5xl">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
