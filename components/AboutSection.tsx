import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="pb-12 my-8 md:mt-40 ">
        <h1 className="text-4xl font-bold text-center font-DancingS text-or dark:text-teal-500">
          A Propos
          <hr className="w-6 h-1 mx-auto my-4 border-0 rounded bg-or dark:bg-teal-500" />
        </h1>

        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row">
          <div className="md:w-1/2">
            <h1 className="mb-6 text-2xl font-bold text-center underline font-DancingS lg:text-4xl dark:text-gray-300 ">
              A propos de moi:
            </h1>
            <p className="mx-3 text-xl text-center dark:text-gray-300 font-DancingS lg:text-3xl">
              Bonjour, mon nom est <span>Bernardin Milhet</span> et je suis fan
              de technologies depuis mon plus jeune âge, j'avais pour habitude
              de démonter différents objets pour comprendre leur fonctionnement,
              à l'âge adulte, j'ai décidé de faire de même avec des ordinateurs.
            </p>
            <br />
            <p className="mx-3 text-xl text-center dark:text-gray-300 font-DancingS lg:text-3xl">
              Puis, j'ai voulu comprendre leur langage, c'est ce qui m'a décidé
              à me diriger vers le monde du code et de la programmation.
            </p>
            <br />
            <p className="mx-3 text-xl text-center dark:text-gray-300 font-DancingS lg:text-3xl">
              J'ai donc pris la décision de me lancer dans une formation de
              Développeur Web auprès de la Wild Code School, que je viens de
              terminer. Je suis donc à la recherche d'une opportunité pour
              mettre en pratique mes compétences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
