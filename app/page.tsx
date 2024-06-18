import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bernardin Milhet Portfolio",
  description: "Mon CV en ligne, représentant mes compétences et savoirs faire en tant que développeur web",
};

const Home = () => {
  return (
    <main className="max-w-3xl px-4 mx-auto sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
};

export default Home;
