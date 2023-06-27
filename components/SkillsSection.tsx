import React from "react";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Javascript" },
  { skill: "Typescript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Astro.js" },
  { skill: "Vue.js" },
  { skill: "Tailwind CSS" },
  { skill: "Sass" },
  { skill: "Github" },
  { skill: "Git" },
];

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="pb-12 my-12 md:pt-16 md:pb-48">
        <h1 className="text-4xl font-bold text-center font-DancingS text-or dark:text-teal-500">
          Compétences
          <hr className="w-6 h-1 mx-auto my-4 border-0 rounded bg-or dark:bg-teal-500" />
        </h1>
        <div className="text-center">
          <h1 className="mb-6 text-2xl font-bold underline font-DancingS">
            Langages:
          </h1>
          <div className="z-10 grid flex-wrap justify-center grid-cols-1 md:grid-cols-3 md:justify-start">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="px-4 py-2 mt-2 mr-2 font-semibold text-gray-400 dark:text-gray-300 bg-or dark:bg-teal-500 rounded-xl"
                >
                  {item.skill}
                </p>
              );
            })}
          </div>
        </div>
        <div className="mt-8 text-center">
          <h1 className="mb-6 text-2xl font-bold underline font-DancingS">
            Savoir faire:
          </h1>
          <ul className="flex flex-col">
            <li>Concevoir une application web</li>
            <li>Recueillir et analyser les besoins client</li>
            <li>Concevoir et gérer un projet</li>
            <li>Méthode Agile</li>
            <li>Réaliser un diagnostic technique</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <h1 className="mb-6 text-2xl font-bold underline font-DancingS">
            Savoir être:
          </h1>
          <ul className="flex flex-col">
            <li>Travailler en équipe</li>
            <li>Organiser son travail selon les priorités et les objectifs</li>
            <li>Faire preuve de leadership</li>
            <li>Faire preuve d'autonomie</li>
            <li>Faire preuve de curiosité</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
